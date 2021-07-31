using Microsoft.EntityFrameworkCore.Migrations;

namespace EnglishBuddy.Migrations
{
    public partial class Ravindu : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FluencyScore",
                table: "ActivityResults");

            migrationBuilder.DropColumn(
                name: "PronunciationScore",
                table: "ActivityResults");

            migrationBuilder.AddColumn<double>(
                name: "ArticulationRate",
                table: "ActivityResults",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "MispronuncedPhonemes",
                table: "ActivityResults",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<string>(
                name: "MispronuncedWords",
                table: "ActivityResults",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "PronunciationLevel",
                table: "ActivityResults",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "SpeakingRate",
                table: "ActivityResults",
                type: "float",
                nullable: false,
                defaultValue: 0.0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ArticulationRate",
                table: "ActivityResults");

            migrationBuilder.DropColumn(
                name: "MispronuncedPhonemes",
                table: "ActivityResults");

            migrationBuilder.DropColumn(
                name: "MispronuncedWords",
                table: "ActivityResults");

            migrationBuilder.DropColumn(
                name: "PronunciationLevel",
                table: "ActivityResults");

            migrationBuilder.DropColumn(
                name: "SpeakingRate",
                table: "ActivityResults");

            migrationBuilder.AddColumn<int>(
                name: "FluencyScore",
                table: "ActivityResults",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "PronunciationScore",
                table: "ActivityResults",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
