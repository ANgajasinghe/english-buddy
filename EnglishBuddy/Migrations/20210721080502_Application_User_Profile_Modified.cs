using Microsoft.EntityFrameworkCore.Migrations;

namespace EnglishBuddy.Migrations
{
    public partial class Application_User_Profile_Modified : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Age",
                table: "ApplicationUsers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "ApplicationUsers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Grammar",
                table: "ApplicationUsers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Language",
                table: "ApplicationUsers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Resident",
                table: "ApplicationUsers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Speaking",
                table: "ApplicationUsers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Writing",
                table: "ApplicationUsers",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Age",
                table: "ApplicationUsers");

            migrationBuilder.DropColumn(
                name: "City",
                table: "ApplicationUsers");

            migrationBuilder.DropColumn(
                name: "Grammar",
                table: "ApplicationUsers");

            migrationBuilder.DropColumn(
                name: "Language",
                table: "ApplicationUsers");

            migrationBuilder.DropColumn(
                name: "Resident",
                table: "ApplicationUsers");

            migrationBuilder.DropColumn(
                name: "Speaking",
                table: "ApplicationUsers");

            migrationBuilder.DropColumn(
                name: "Writing",
                table: "ApplicationUsers");
        }
    }
}
