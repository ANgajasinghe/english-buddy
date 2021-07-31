using Microsoft.EntityFrameworkCore.Migrations;

namespace EnglishBuddy.Migrations
{
    public partial class WordLimit_Added_To_Activity_2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PolarityScore",
                table: "ActivityResults",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "SpellingGrammarMistakes",
                table: "ActivityResults",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "SubjectivityScore",
                table: "ActivityResults",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PolarityScore",
                table: "ActivityResults");

            migrationBuilder.DropColumn(
                name: "SpellingGrammarMistakes",
                table: "ActivityResults");

            migrationBuilder.DropColumn(
                name: "SubjectivityScore",
                table: "ActivityResults");
        }
    }
}
