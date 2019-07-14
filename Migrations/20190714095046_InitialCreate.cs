using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace dotsession.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ImgDanmus",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Url = table.Column<string>(nullable: true),
                    Width = table.Column<int>(nullable: false),
                    Height = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ImgDanmus", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TextDanmus",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Msg = table.Column<string>(nullable: true),
                    Color = table.Column<string>(nullable: true),
                    FontSize = table.Column<int>(nullable: false),
                    FontFamily = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TextDanmus", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Danmus",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Type = table.Column<string>(maxLength: 10, nullable: false),
                    ImgDanmuId = table.Column<Guid>(nullable: true),
                    TextDanmuId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Danmus", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Danmus_ImgDanmus_ImgDanmuId",
                        column: x => x.ImgDanmuId,
                        principalTable: "ImgDanmus",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Danmus_TextDanmus_TextDanmuId",
                        column: x => x.TextDanmuId,
                        principalTable: "TextDanmus",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Danmus_ImgDanmuId",
                table: "Danmus",
                column: "ImgDanmuId");

            migrationBuilder.CreateIndex(
                name: "IX_Danmus_TextDanmuId",
                table: "Danmus",
                column: "TextDanmuId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Danmus");

            migrationBuilder.DropTable(
                name: "ImgDanmus");

            migrationBuilder.DropTable(
                name: "TextDanmus");
        }
    }
}
