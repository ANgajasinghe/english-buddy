using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EnglishBuddy.Migrations
{
    public partial class Init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                "ApplicationUsers",
                table => new
                {
                    Id = table.Column<string>("nvarchar(450)", nullable: false),
                    Email = table.Column<string>("nvarchar(max)", nullable: false),
                    Password = table.Column<string>("nvarchar(max)", nullable: false),
                    FirstName = table.Column<string>("nvarchar(max)", nullable: false),
                    LastName = table.Column<string>("nvarchar(max)", nullable: false),
                    Gender = table.Column<string>("nvarchar(max)", nullable: false),
                    RoleName = table.Column<string>("nvarchar(max)", nullable: false),
                    CreatedUserId = table.Column<string>("nvarchar(max)", nullable: true),
                    ModifiedUserId = table.Column<string>("nvarchar(max)", nullable: true),
                    ModifiedDate = table.Column<DateTime>("datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>("datetime2", nullable: false)
                },
                constraints: table => { table.PrimaryKey("PK_ApplicationUsers", x => x.Id); });

            migrationBuilder.CreateTable(
                "CourseCategories",
                table => new
                {
                    Id = table.Column<int>("int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>("nvarchar(max)", nullable: false),
                    CreatedUserId = table.Column<string>("nvarchar(max)", nullable: true),
                    ModifiedUserId = table.Column<string>("nvarchar(max)", nullable: true),
                    ModifiedDate = table.Column<DateTime>("datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>("datetime2", nullable: false)
                },
                constraints: table => { table.PrimaryKey("PK_CourseCategories", x => x.Id); });

            migrationBuilder.CreateTable(
                "Courses",
                table => new
                {
                    Id = table.Column<int>("int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>("nvarchar(max)", nullable: false),
                    Introduction = table.Column<string>("nvarchar(max)", nullable: false),
                    CourseCategoryId = table.Column<int>("int", nullable: false),
                    Rating = table.Column<float>("real", nullable: false),
                    CreatedUserId = table.Column<string>("nvarchar(max)", nullable: true),
                    ModifiedUserId = table.Column<string>("nvarchar(max)", nullable: true),
                    ModifiedDate = table.Column<DateTime>("datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>("datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Courses", x => x.Id);
                    table.ForeignKey(
                        "FK_Courses_CourseCategories_CourseCategoryId",
                        x => x.CourseCategoryId,
                        "CourseCategories",
                        "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                "Lessons",
                table => new
                {
                    Id = table.Column<int>("int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CourseCategoryId = table.Column<int>("int", nullable: false),
                    Title = table.Column<string>("nvarchar(max)", nullable: false),
                    Type = table.Column<int>("int", nullable: false),
                    Rating = table.Column<float>("real", nullable: false),
                    CreatedUserId = table.Column<string>("nvarchar(max)", nullable: true),
                    ModifiedUserId = table.Column<string>("nvarchar(max)", nullable: true),
                    ModifiedDate = table.Column<DateTime>("datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>("datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lessons", x => x.Id);
                    table.ForeignKey(
                        "FK_Lessons_CourseCategories_CourseCategoryId",
                        x => x.CourseCategoryId,
                        "CourseCategories",
                        "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                "Activities",
                table => new
                {
                    Id = table.Column<int>("int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>("nvarchar(max)", nullable: false),
                    ModelAnswer = table.Column<string>("nvarchar(max)", nullable: false),
                    CourseId = table.Column<int>("int", nullable: true),
                    Description = table.Column<string>("nvarchar(max)", nullable: true),
                    DifficultyLevel = table.Column<int>("int", nullable: false),
                    Rating = table.Column<int>("int", nullable: false),
                    CreatedUserId = table.Column<string>("nvarchar(max)", nullable: true),
                    ModifiedUserId = table.Column<string>("nvarchar(max)", nullable: true),
                    ModifiedDate = table.Column<DateTime>("datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>("datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Activities", x => x.Id);
                    table.ForeignKey(
                        "FK_Activities_Courses_CourseId",
                        x => x.CourseId,
                        "Courses",
                        "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                "CourseComment",
                table => new
                {
                    Id = table.Column<int>("int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CourseId = table.Column<int>("int", nullable: false),
                    Comment = table.Column<string>("nvarchar(max)", nullable: true),
                    CreatedUserId = table.Column<string>("nvarchar(max)", nullable: true),
                    ModifiedUserId = table.Column<string>("nvarchar(max)", nullable: true),
                    ModifiedDate = table.Column<DateTime>("datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>("datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CourseComment", x => x.Id);
                    table.ForeignKey(
                        "FK_CourseComment_Courses_CourseId",
                        x => x.CourseId,
                        "Courses",
                        "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                "SamplesQuestions",
                table => new
                {
                    Id = table.Column<int>("int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CourseId = table.Column<int>("int", nullable: false),
                    Questions = table.Column<string>("nvarchar(max)", nullable: true),
                    Answers = table.Column<string>("nvarchar(max)", nullable: true),
                    Rating = table.Column<float>("real", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SamplesQuestions", x => x.Id);
                    table.ForeignKey(
                        "FK_SamplesQuestions_Courses_CourseId",
                        x => x.CourseId,
                        "Courses",
                        "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                "LessonComments",
                table => new
                {
                    Id = table.Column<int>("int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LessonId = table.Column<int>("int", nullable: false),
                    Comment = table.Column<string>("nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LessonComments", x => x.Id);
                    table.ForeignKey(
                        "FK_LessonComments_Lessons_LessonId",
                        x => x.LessonId,
                        "Lessons",
                        "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                "ActivityResults",
                table => new
                {
                    Id = table.Column<int>("int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ApplicationUserId = table.Column<string>("nvarchar(450)", nullable: false),
                    ActivityId = table.Column<int>("int", nullable: false),
                    SpellingScore = table.Column<float>("real", nullable: false),
                    GrammarScore = table.Column<float>("real", nullable: false),
                    SubjectivityScore = table.Column<float>("real", nullable: false),
                    PronunciationScore = table.Column<float>("real", nullable: false),
                    SimilarityScore = table.Column<float>("real", nullable: false),
                    FluencyScore = table.Column<float>("real", nullable: false),
                    OverallScore = table.Column<float>("real", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ActivityResults", x => x.Id);
                    table.ForeignKey(
                        "FK_ActivityResults_Activities_ActivityId",
                        x => x.ActivityId,
                        "Activities",
                        "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        "FK_ActivityResults_ApplicationUsers_ApplicationUserId",
                        x => x.ApplicationUserId,
                        "ApplicationUsers",
                        "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                "IX_Activities_CourseId",
                "Activities",
                "CourseId");

            migrationBuilder.CreateIndex(
                "IX_ActivityResults_ActivityId",
                "ActivityResults",
                "ActivityId");

            migrationBuilder.CreateIndex(
                "IX_ActivityResults_ApplicationUserId",
                "ActivityResults",
                "ApplicationUserId");

            migrationBuilder.CreateIndex(
                "IX_CourseComment_CourseId",
                "CourseComment",
                "CourseId");

            migrationBuilder.CreateIndex(
                "IX_Courses_CourseCategoryId",
                "Courses",
                "CourseCategoryId");

            migrationBuilder.CreateIndex(
                "IX_LessonComments_LessonId",
                "LessonComments",
                "LessonId");

            migrationBuilder.CreateIndex(
                "IX_Lessons_CourseCategoryId",
                "Lessons",
                "CourseCategoryId");

            migrationBuilder.CreateIndex(
                "IX_SamplesQuestions_CourseId",
                "SamplesQuestions",
                "CourseId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                "ActivityResults");

            migrationBuilder.DropTable(
                "CourseComment");

            migrationBuilder.DropTable(
                "LessonComments");

            migrationBuilder.DropTable(
                "SamplesQuestions");

            migrationBuilder.DropTable(
                "Activities");

            migrationBuilder.DropTable(
                "ApplicationUsers");

            migrationBuilder.DropTable(
                "Lessons");

            migrationBuilder.DropTable(
                "Courses");

            migrationBuilder.DropTable(
                "CourseCategories");
        }
    }
}