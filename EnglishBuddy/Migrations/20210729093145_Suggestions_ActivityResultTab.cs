using Microsoft.EntityFrameworkCore.Migrations;

namespace EnglishBuddy.Migrations
{
    public partial class Suggestions_ActivityResultTab : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Suggestions",
                table: "ActivityResults",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Suggestions",
                table: "ActivityResults");
        }
    }
}
