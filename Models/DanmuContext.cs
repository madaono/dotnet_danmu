using Microsoft.EntityFrameworkCore;

namespace dotsession.Models
{
    public class DanmuContext: DbContext
    {
        public DanmuContext(DbContextOptions<DanmuContext> options) : base(options)
        {
        }
        
        public DbSet<Danmu> Danmus { get; set; }
        public DbSet<TextDanmu> TextDanmus { get; set; }
        public DbSet<ImgDanmu> ImgDanmus { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {


            modelBuilder.Entity<TextDanmu>().ToTable("TextDanmu");
            modelBuilder.Entity<ImgDanmu>().ToTable("ImgDanmu");
            modelBuilder.Entity<Danmu>().ToTable("Danmu");
//            modelBuilder.Entity<TextDanmu>().Property(l => l.Type)
//                .HasMaxLength(10)
//                .IsRequired();
//            modelBuilder.Entity<ImgDanmu>().Property(l => l.Url)
//                .IsRequired();
//            modelBuilder.Entity<ImgDanmu>().Property(l => l.DanmuId)
//                .IsRequired();
//            modelBuilder.Entity<ImgDanmu>().Property(l => l.Type)
//                .HasMaxLength(10)
//                .IsRequired();
            base.OnModelCreating(modelBuilder);
        }
    }
}