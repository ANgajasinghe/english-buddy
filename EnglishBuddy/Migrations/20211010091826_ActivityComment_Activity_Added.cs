using Microsoft.EntityFrameworkCore.Migrations;

namespace EnglishBuddy.Migrations
{
    public partial class ActivityComment_Activity_Added : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ActivityComments_Activities_ActivityId",
                table: "ActivityComments");

            migrationBuilder.AlterColumn<int>(
                name: "ActivityId",
                table: "ActivityComments",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_ActivityComments_Activities_ActivityId",
                table: "ActivityComments",
                column: "ActivityId",
                principalTable: "Activities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ActivityComments_Activities_ActivityId",
                table: "ActivityComments");

            migrationBuilder.AlterColumn<int>(
                name: "ActivityId",
                table: "ActivityComments",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AddForeignKey(
                name: "FK_ActivityComments_Activities_ActivityId",
                table: "ActivityComments",
                column: "ActivityId",
                principalTable: "Activities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
