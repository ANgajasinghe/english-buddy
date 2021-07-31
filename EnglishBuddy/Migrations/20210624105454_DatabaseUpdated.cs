using Microsoft.EntityFrameworkCore.Migrations;

namespace EnglishBuddy.Migrations
{
    public partial class DatabaseUpdated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserActivities_Activities_RecommendActivityId",
                table: "UserActivities");

            migrationBuilder.DropForeignKey(
                name: "FK_UserActivities_ApplicationUserCourses_ApplicationUserId",
                table: "UserActivities");

            migrationBuilder.DropForeignKey(
                name: "FK_UserLessons_ApplicationUserCourses_ApplicationUserId",
                table: "UserLessons");

            migrationBuilder.DropForeignKey(
                name: "FK_UserLessons_Lessons_RecommendLessonId",
                table: "UserLessons");

            migrationBuilder.DropForeignKey(
                name: "FK_UserSampleQuestions_ApplicationUserCourses_ApplicationUserId",
                table: "UserSampleQuestions");

            migrationBuilder.DropForeignKey(
                name: "FK_UserSampleQuestions_SamplesQuestions_SamplesQuestionId",
                table: "UserSampleQuestions");

            migrationBuilder.DropIndex(
                name: "IX_UserSampleQuestions_ApplicationUserId",
                table: "UserSampleQuestions");

            migrationBuilder.DropIndex(
                name: "IX_UserLessons_ApplicationUserId",
                table: "UserLessons");

            migrationBuilder.DropIndex(
                name: "IX_UserActivities_ApplicationUserId",
                table: "UserActivities");

            migrationBuilder.DropColumn(
                name: "ApplicationUserId",
                table: "UserSampleQuestions");

            migrationBuilder.DropColumn(
                name: "ApplicationUserId",
                table: "UserLessons");

            migrationBuilder.DropColumn(
                name: "ApplicationUserId",
                table: "UserActivities");

            migrationBuilder.AlterColumn<int>(
                name: "SamplesQuestionId",
                table: "UserSampleQuestions",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ApplicationUserCourseId",
                table: "UserSampleQuestions",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "LastResult",
                table: "UserSampleQuestions",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "PresentedCount",
                table: "UserSampleQuestions",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<int>(
                name: "RecommendLessonId",
                table: "UserLessons",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ApplicationUserCourseId",
                table: "UserLessons",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "LastResult",
                table: "UserLessons",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "PresentedCount",
                table: "UserLessons",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<int>(
                name: "RecommendActivityId",
                table: "UserActivities",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ApplicationUserCourseId",
                table: "UserActivities",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "LastResult",
                table: "UserActivities",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "PresentedCount",
                table: "UserActivities",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_UserSampleQuestions_ApplicationUserCourseId",
                table: "UserSampleQuestions",
                column: "ApplicationUserCourseId");

            migrationBuilder.CreateIndex(
                name: "IX_UserLessons_ApplicationUserCourseId",
                table: "UserLessons",
                column: "ApplicationUserCourseId");

            migrationBuilder.CreateIndex(
                name: "IX_UserActivities_ApplicationUserCourseId",
                table: "UserActivities",
                column: "ApplicationUserCourseId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserActivities_Activities_RecommendActivityId",
                table: "UserActivities",
                column: "RecommendActivityId",
                principalTable: "Activities",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_UserActivities_ApplicationUserCourses_ApplicationUserCourseId",
                table: "UserActivities",
                column: "ApplicationUserCourseId",
                principalTable: "ApplicationUserCourses",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_UserLessons_ApplicationUserCourses_ApplicationUserCourseId",
                table: "UserLessons",
                column: "ApplicationUserCourseId",
                principalTable: "ApplicationUserCourses",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_UserLessons_Lessons_RecommendLessonId",
                table: "UserLessons",
                column: "RecommendLessonId",
                principalTable: "Lessons",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_UserSampleQuestions_ApplicationUserCourses_ApplicationUserCourseId",
                table: "UserSampleQuestions",
                column: "ApplicationUserCourseId",
                principalTable: "ApplicationUserCourses",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_UserSampleQuestions_SamplesQuestions_SamplesQuestionId",
                table: "UserSampleQuestions",
                column: "SamplesQuestionId",
                principalTable: "SamplesQuestions",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserActivities_Activities_RecommendActivityId",
                table: "UserActivities");

            migrationBuilder.DropForeignKey(
                name: "FK_UserActivities_ApplicationUserCourses_ApplicationUserCourseId",
                table: "UserActivities");

            migrationBuilder.DropForeignKey(
                name: "FK_UserLessons_ApplicationUserCourses_ApplicationUserCourseId",
                table: "UserLessons");

            migrationBuilder.DropForeignKey(
                name: "FK_UserLessons_Lessons_RecommendLessonId",
                table: "UserLessons");

            migrationBuilder.DropForeignKey(
                name: "FK_UserSampleQuestions_ApplicationUserCourses_ApplicationUserCourseId",
                table: "UserSampleQuestions");

            migrationBuilder.DropForeignKey(
                name: "FK_UserSampleQuestions_SamplesQuestions_SamplesQuestionId",
                table: "UserSampleQuestions");

            migrationBuilder.DropIndex(
                name: "IX_UserSampleQuestions_ApplicationUserCourseId",
                table: "UserSampleQuestions");

            migrationBuilder.DropIndex(
                name: "IX_UserLessons_ApplicationUserCourseId",
                table: "UserLessons");

            migrationBuilder.DropIndex(
                name: "IX_UserActivities_ApplicationUserCourseId",
                table: "UserActivities");

            migrationBuilder.DropColumn(
                name: "ApplicationUserCourseId",
                table: "UserSampleQuestions");

            migrationBuilder.DropColumn(
                name: "LastResult",
                table: "UserSampleQuestions");

            migrationBuilder.DropColumn(
                name: "PresentedCount",
                table: "UserSampleQuestions");

            migrationBuilder.DropColumn(
                name: "ApplicationUserCourseId",
                table: "UserLessons");

            migrationBuilder.DropColumn(
                name: "LastResult",
                table: "UserLessons");

            migrationBuilder.DropColumn(
                name: "PresentedCount",
                table: "UserLessons");

            migrationBuilder.DropColumn(
                name: "ApplicationUserCourseId",
                table: "UserActivities");

            migrationBuilder.DropColumn(
                name: "LastResult",
                table: "UserActivities");

            migrationBuilder.DropColumn(
                name: "PresentedCount",
                table: "UserActivities");

            migrationBuilder.AlterColumn<int>(
                name: "SamplesQuestionId",
                table: "UserSampleQuestions",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "ApplicationUserId",
                table: "UserSampleQuestions",
                type: "int",
                nullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "RecommendLessonId",
                table: "UserLessons",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "ApplicationUserId",
                table: "UserLessons",
                type: "int",
                nullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "RecommendActivityId",
                table: "UserActivities",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "ApplicationUserId",
                table: "UserActivities",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_UserSampleQuestions_ApplicationUserId",
                table: "UserSampleQuestions",
                column: "ApplicationUserId");

            migrationBuilder.CreateIndex(
                name: "IX_UserLessons_ApplicationUserId",
                table: "UserLessons",
                column: "ApplicationUserId");

            migrationBuilder.CreateIndex(
                name: "IX_UserActivities_ApplicationUserId",
                table: "UserActivities",
                column: "ApplicationUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserActivities_Activities_RecommendActivityId",
                table: "UserActivities",
                column: "RecommendActivityId",
                principalTable: "Activities",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_UserActivities_ApplicationUserCourses_ApplicationUserId",
                table: "UserActivities",
                column: "ApplicationUserId",
                principalTable: "ApplicationUserCourses",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_UserLessons_ApplicationUserCourses_ApplicationUserId",
                table: "UserLessons",
                column: "ApplicationUserId",
                principalTable: "ApplicationUserCourses",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_UserLessons_Lessons_RecommendLessonId",
                table: "UserLessons",
                column: "RecommendLessonId",
                principalTable: "Lessons",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_UserSampleQuestions_ApplicationUserCourses_ApplicationUserId",
                table: "UserSampleQuestions",
                column: "ApplicationUserId",
                principalTable: "ApplicationUserCourses",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_UserSampleQuestions_SamplesQuestions_SamplesQuestionId",
                table: "UserSampleQuestions",
                column: "SamplesQuestionId",
                principalTable: "SamplesQuestions",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);
        }
    }
}
