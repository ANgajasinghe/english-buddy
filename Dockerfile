FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 5000
ENV ASPNETCORE_URLS=http://+:5000
RUN adduser -u 5678 --disabled-password --gecos "" appuser && chown -R appuser /app
USER appuser

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install -y nodejs
WORKDIR /src
COPY ["EnglishBuddy/EnglishBuddy.csproj", "EnglishBuddy/"]
RUN dotnet restore "EnglishBuddy/EnglishBuddy.csproj"
COPY . .
WORKDIR "/src/EnglishBuddy"
RUN dotnet build "EnglishBuddy.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "EnglishBuddy.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
#ENTRYPOINT ["dotnet", "EnglishBuddy.dll"]
CMD ASPNETCORE_URLS=http://*:$PORT dotnet EnglishBuddy.dll
