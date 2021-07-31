using Microsoft.EntityFrameworkCore.Migrations;

namespace EnglishBuddy.Migrations
{
    public partial class Ravindu_2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MispronuncedPhonemes",
                table: "ActivityResults");

            migrationBuilder.RenameColumn(
                name: "MispronuncedWords",
                table: "ActivityResults",
                newName: "MispronouncedWords");

            migrationBuilder.AddColumn<string>(
                name: "MispronouncedPhonemes",
                table: "ActivityResults",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MispronouncedPhonemes",
                table: "ActivityResults");

            migrationBuilder.RenameColumn(
                name: "MispronouncedWords",
                table: "ActivityResults",
                newName: "MispronuncedWords");

            migrationBuilder.AddColumn<double>(
                name: "MispronuncedPhonemes",
                table: "ActivityResults",
                type: "float",
                nullable: false,
                defaultValue: 0.0);
        }
    }
}
