using Microsoft.EntityFrameworkCore.Migrations;

namespace EnglishBuddy.Migrations
{
    public partial class Suggestions_ActivityResultTab_1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ModelAnswer",
                table: "ActivityResults",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "StudentAnswer",
                table: "ActivityResults",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ModelAnswer",
                table: "ActivityResults");

            migrationBuilder.DropColumn(
                name: "StudentAnswer",
                table: "ActivityResults");
        }
    }
}
