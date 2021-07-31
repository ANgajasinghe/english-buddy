using Microsoft.AspNetCore.Http;

namespace EnglishBuddy.Services
{
    public class CurrentUserService
    {
        private readonly IHttpContextAccessor _contextAccessor;

        public CurrentUserService(IHttpContextAccessor contextAccessor)
        {
            _contextAccessor = contextAccessor;
        }

        public string UserId => _contextAccessor?.HttpContext?.Request.Headers["user-id"];
    }
}