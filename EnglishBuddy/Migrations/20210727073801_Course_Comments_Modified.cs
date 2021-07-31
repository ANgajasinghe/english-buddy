using Microsoft.EntityFrameworkCore.Migrations;

namespace EnglishBuddy.Migrations
{
    public partial class Course_Comments_Modified : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CourseComment_Courses_CourseId",
                table: "CourseComment");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CourseComment",
                table: "CourseComment");

            migrationBuilder.RenameTable(
                name: "CourseComment",
                newName: "CourseComments");

            migrationBuilder.RenameIndex(
                name: "IX_CourseComment_CourseId",
                table: "CourseComments",
                newName: "IX_CourseComments_CourseId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CourseComments",
                table: "CourseComments",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_CourseComments_Courses_CourseId",
                table: "CourseComments",
                column: "CourseId",
                principalTable: "Courses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CourseComments_Courses_CourseId",
                table: "CourseComments");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CourseComments",
                table: "CourseComments");

            migrationBuilder.RenameTable(
                name: "CourseComments",
                newName: "CourseComment");

            migrationBuilder.RenameIndex(
                name: "IX_CourseComments_CourseId",
                table: "CourseComment",
                newName: "IX_CourseComment_CourseId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CourseComment",
                table: "CourseComment",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_CourseComment_Courses_CourseId",
                table: "CourseComment",
                column: "CourseId",
                principalTable: "Courses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
