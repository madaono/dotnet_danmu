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

            base.OnModelCreating(modelBuilder);
        }
    }
}