using Microsoft.EntityFrameworkCore.Migrations;

namespace EnglishBuddy.Migrations
{
    public partial class WordLimit_Added_To_Activity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SubjectivityScore",
                table: "ActivityResults");

            migrationBuilder.AlterColumn<int>(
                name: "SpellingScore",
                table: "ActivityResults",
                type: "int",
                nullable: false,
                oldClrType: typeof(float),
                oldType: "real");

            migrationBuilder.AlterColumn<int>(
                name: "SimilarityScore",
                table: "ActivityResults",
                type: "int",
                nullable: false,
                oldClrType: typeof(float),
                oldType: "real");

            migrationBuilder.AlterColumn<int>(
                name: "PronunciationScore",
                table: "ActivityResults",
                type: "int",
                nullable: false,
                oldClrType: typeof(float),
                oldType: "real");

            migrationBuilder.AlterColumn<int>(
                name: "OverallScore",
                table: "ActivityResults",
                type: "int",
                nullable: false,
                oldClrType: typeof(float),
                oldType: "real");

            migrationBuilder.AlterColumn<int>(
                name: "GrammarScore",
                table: "ActivityResults",
                type: "int",
                nullable: false,
                oldClrType: typeof(float),
                oldType: "real");

            migrationBuilder.AlterColumn<int>(
                name: "FluencyScore",
                table: "ActivityResults",
                type: "int",
                nullable: false,
                oldClrType: typeof(float),
                oldType: "real");

            migrationBuilder.AddColumn<int>(
                name: "EssayScore",
                table: "ActivityResults",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ObjectivityScore",
                table: "ActivityResults",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "WordLimit",
                table: "Activities",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EssayScore",
                table: "ActivityResults");

            migrationBuilder.DropColumn(
                name: "ObjectivityScore",
                table: "ActivityResults");

            migrationBuilder.DropColumn(
                name: "WordLimit",
                table: "Activities");

            migrationBuilder.AlterColumn<float>(
                name: "SpellingScore",
                table: "ActivityResults",
                type: "real",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<float>(
                name: "SimilarityScore",
                table: "ActivityResults",
                type: "real",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<float>(
                name: "PronunciationScore",
                table: "ActivityResults",
                type: "real",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<float>(
                name: "OverallScore",
                table: "ActivityResults",
                type: "real",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<float>(
                name: "GrammarScore",
                table: "ActivityResults",
                type: "real",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<float>(
                name: "FluencyScore",
                table: "ActivityResults",
                type: "real",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<float>(
                name: "SubjectivityScore",
                table: "ActivityResults",
                type: "real",
                nullable: false,
                defaultValue: 0f);
        }
    }
}
