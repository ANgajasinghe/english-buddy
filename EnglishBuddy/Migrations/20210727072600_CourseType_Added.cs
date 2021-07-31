using Microsoft.EntityFrameworkCore.Migrations;

namespace EnglishBuddy.Migrations
{
    public partial class CourseType_Added : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CourseTypeId",
                table: "Courses",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "CourseTypes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CourseTypes", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Courses_CourseTypeId",
                table: "Courses",
                column: "CourseTypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Courses_CourseTypes_CourseTypeId",
                table: "Courses",
                column: "CourseTypeId",
                principalTable: "CourseTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Courses_CourseTypes_CourseTypeId",
                table: "Courses");

            migrationBuilder.DropTable(
                name: "CourseTypes");

            migrationBuilder.DropIndex(
                name: "IX_Courses_CourseTypeId",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "CourseTypeId",
                table: "Courses");
        }
    }
}
