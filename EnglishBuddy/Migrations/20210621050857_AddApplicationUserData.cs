using Microsoft.EntityFrameworkCore.Migrations;

namespace EnglishBuddy.Migrations
{
    public partial class AddApplicationUserData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                "ApplicationUserCourses",
                table => new
                {
                    Id = table.Column<int>("int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ApplicationUserId = table.Column<string>("nvarchar(450)", nullable: true),
                    CourseId = table.Column<int>("int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApplicationUserCourses", x => x.Id);
                    table.ForeignKey(
                        "FK_ApplicationUserCourses_ApplicationUsers_ApplicationUserId",
                        x => x.ApplicationUserId,
                        "ApplicationUsers",
                        "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        "FK_ApplicationUserCourses_Courses_CourseId",
                        x => x.CourseId,
                        "Courses",
                        "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                "IX_ApplicationUserCourses_ApplicationUserId",
                "ApplicationUserCourses",
                "ApplicationUserId");

            migrationBuilder.CreateIndex(
                "IX_ApplicationUserCourses_CourseId",
                "ApplicationUserCourses",
                "CourseId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                "ApplicationUserCourses");
        }
    }
}