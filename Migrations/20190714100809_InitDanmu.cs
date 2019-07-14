using System;
using dotsession.Models;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace dotsession.Migrations
{
    public partial class InitDanmu : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TextDanmu",
                columns: table => new
                {
                    DanmuId = table.Column<Guid>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy",
                            SqlServerValueGenerationStrategy.IdentityColumn),
                    Msg = table.Column<string>(nullable: false),
                    Type = table.Column<string>(nullable: false),
                    Color = table.Column<string>(nullable: true),
                    FontSize = table.Column<int>(nullable: true),
                    FontFamily = table.Column<string>(nullable: true)
                },
                constraints: table => { table.PrimaryKey("PK_TextDanmu", x => x.DanmuId); }
            );
            migrationBuilder.CreateTable(
                name: "ImgDanmu",
                columns: table => new
                {
                    DanmuId = table.Column<Guid>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy",
                            SqlServerValueGenerationStrategy.IdentityColumn),
                    Url = table.Column<string>(nullable: false),
                    Type = table.Column<string>(nullable: false),
                    Width = table.Column<int>(nullable: true),
                    Height = table.Column<int>(nullable: true)
                },
                constraints: table => { table.PrimaryKey("PK_ImgDanmu", x => x.DanmuId); }
            );
            migrationBuilder.CreateTable(
                name: "Danmu",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy",
                            SqlServerValueGenerationStrategy.IdentityColumn),
                    DanmuId = table.Column<Guid>(nullable:false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Danmu", x => x.Id);
                    table.ForeignKey(name: "FK_Danmu_TextDanmu_Id",
                        columns: x => x.DanmuId,
                        principalTable: "TextDanmu",
                        principalColumns: new[] {"DanmuId"},
                        onDelete: ReferentialAction.Cascade
                    );
                    table.ForeignKey(name: "FK_Danmu_ImgDanmu_Id",
                        columns: x => x.DanmuId,
                        principalTable: "ImgDanmu",
                        principalColumns: new[] {"DanmuId"},
                        onDelete: ReferentialAction.Cascade
                    );
                }
            );
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable("Danmu");
            migrationBuilder.DropTable("TextDanmu");
            migrationBuilder.DropTable("ImgDanmu");
        }
    }
}
