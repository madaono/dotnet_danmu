﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using dotsession.Models;

namespace dotsession.Migrations
{
    [DbContext(typeof(DanmuContext))]
    partial class DanmuContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("dotsession.Models.Danmu", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid?>("ImgDanmuId");

                    b.Property<Guid?>("TextDanmuId");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasMaxLength(10);

                    b.HasKey("Id");

                    b.HasIndex("ImgDanmuId");

                    b.HasIndex("TextDanmuId");

                    b.ToTable("Danmus");
                });

            modelBuilder.Entity("dotsession.Models.ImgDanmu", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Height");

                    b.Property<string>("Url");

                    b.Property<int>("Width");

                    b.HasKey("Id");

                    b.ToTable("ImgDanmus");
                });

            modelBuilder.Entity("dotsession.Models.TextDanmu", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Color");

                    b.Property<string>("FontFamily");

                    b.Property<int>("FontSize");

                    b.Property<string>("Msg");

                    b.HasKey("Id");

                    b.ToTable("TextDanmus");
                });

            modelBuilder.Entity("dotsession.Models.Danmu", b =>
                {
                    b.HasOne("dotsession.Models.ImgDanmu", "ImgDanmu")
                        .WithMany()
                        .HasForeignKey("ImgDanmuId");

                    b.HasOne("dotsession.Models.TextDanmu", "TextDanmu")
                        .WithMany()
                        .HasForeignKey("TextDanmuId");
                });
#pragma warning restore 612, 618
        }
    }
}
