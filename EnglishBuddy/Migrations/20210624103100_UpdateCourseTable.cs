using Microsoft.EntityFrameworkCore.Migrations;

namespace EnglishBuddy.Migrations
{
    public partial class UpdateCourseTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Activities_Courses_CourseId",
                table: "Activities");

            migrationBuilder.DropForeignKey(
                name: "FK_UserActivities_ApplicationUsers_ApplicationUserId",
                table: "UserActivities");

            migrationBuilder.DropForeignKey(
                name: "FK_UserLessons_ApplicationUsers_ApplicationUserId",
                table: "UserLessons");

            migrationBuilder.DropForeignKey(
                name: "FK_UserSampleQuestions_ApplicationUsers_ApplicationUserId",
                table: "UserSampleQuestions");

            migrationBuilder.AlterColumn<int>(
                name: "ApplicationUserId",
                table: "UserSampleQuestions",
                type: "int",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ApplicationUserId",
                table: "UserLessons",
                type: "int",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ApplicationUserId",
                table: "UserActivities",
                type: "int",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "Rating",
                table: "Lessons",
                type: "int",
                nullable: false,
                oldClrType: typeof(float),
                oldType: "real");

            migrationBuilder.AddColumn<int>(
                name: "Result",
                table: "ApplicationUserCourses",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<int>(
                name: "CourseId",
                table: "Activities",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Activities_Courses_CourseId",
                table: "Activities",
                column: "CourseId",
                principalTable: "Courses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_UserActivities_ApplicationUserCourses_ApplicationUserId",
                table: "UserActivities",
                column: "ApplicationUserId",
                principalTable: "ApplicationUserCourses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_UserLessons_ApplicationUserCourses_ApplicationUserId",
                table: "UserLessons",
                column: "ApplicationUserId",
                principalTable: "ApplicationUserCourses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_UserSampleQuestions_ApplicationUserCourses_ApplicationUserId",
                table: "UserSampleQuestions",
                column: "ApplicationUserId",
                principalTable: "ApplicationUserCourses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Activities_Courses_CourseId",
                table: "Activities");

            migrationBuilder.DropForeignKey(
                name: "FK_UserActivities_ApplicationUserCourses_ApplicationUserId",
                table: "UserActivities");

            migrationBuilder.DropForeignKey(
                name: "FK_UserLessons_ApplicationUserCourses_ApplicationUserId",
                table: "UserLessons");

            migrationBuilder.DropForeignKey(
                name: "FK_UserSampleQuestions_ApplicationUserCourses_ApplicationUserId",
                table: "UserSampleQuestions");

            migrationBuilder.DropColumn(
                name: "Result",
                table: "ApplicationUserCourses");

            migrationBuilder.AlterColumn<string>(
                name: "ApplicationUserId",
                table: "UserSampleQuestions",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "ApplicationUserId",
                table: "UserLessons",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "ApplicationUserId",
                table: "UserActivities",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<float>(
                name: "Rating",
                table: "Lessons",
                type: "real",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "CourseId",
                table: "Activities",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Activities_Courses_CourseId",
                table: "Activities",
                column: "CourseId",
                principalTable: "Courses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_UserActivities_ApplicationUsers_ApplicationUserId",
                table: "UserActivities",
                column: "ApplicationUserId",
                principalTable: "ApplicationUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_UserLessons_ApplicationUsers_ApplicationUserId",
                table: "UserLessons",
                column: "ApplicationUserId",
                principalTable: "ApplicationUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_UserSampleQuestions_ApplicationUsers_ApplicationUserId",
                table: "UserSampleQuestions",
                column: "ApplicationUserId",
                principalTable: "ApplicationUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
