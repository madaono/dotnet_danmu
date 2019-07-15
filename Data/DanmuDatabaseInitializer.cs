using System.Threading.Tasks;
using dotsession.Models;
using Microsoft.EntityFrameworkCore;

namespace dotsession.Data
{
    public class DanmuDatabaseInitializer
    {
        private static bool s_databaseChecked = false;
        private readonly DanmuContext _context;

        public DanmuDatabaseInitializer(DanmuContext context) => _context = context;

        public async Task CreateAndSeedDatabaseAsync()
        {
            if (s_databaseChecked)
            {
                s_databaseChecked = true;
                await _context.Database.MigrateAsync();
                if (await _context.TextDanmus.CountAsync() == 0)
                {
                    _context.TextDanmus.Add(new TextDanmu
                    {
                        Type = "TextDanmu",
                        Msg = "test dm from db",
                        FontSize = 18,
                        Color = "#bfc",
                        FontFamily = "宋体"
                    });
                    _context.TextDanmus.Add(new TextDanmu
                    {
                        Type = "TextDanmu",
                        Msg = "test dm from db22",
                        FontSize = 22,
                        Color = "#bbb",
                        FontFamily = "宋体"
                    });
                    _context.TextDanmus.Add(new TextDanmu
                    {
                        Type = "TextDanmu",
                        Msg = "test dm from db33",
                        FontSize = 24,
                        Color = "#ccc",
                        FontFamily = "宋体"
                    });
                }

                if (await _context.ImgDanmus.CountAsync() == 0)
                {
                    _context.ImgDanmus.Add(new ImgDanmu
                    {
                        Url = "https://img.3dmgame.com/uploads/images/thumbnews/20190714/1563099018_101521.jpg",
                        Type = "ImgDanmu",
                        Width = 200,
                        Height = 200
                    });
                    _context.ImgDanmus.Add(new ImgDanmu
                    {
                        Url = "https://img.3dmgame.com/uploads/images/thumbnews/20190714/1563098777_650363.jpg",
                        Type = "ImgDanmu",
                        Width = 200,
                        Height = 200
                    });
                    _context.ImgDanmus.Add(new ImgDanmu
                    {
                        Url = "https://img.3dmgame.com/uploads/images/thumbnews/20190714/1563098938_575218.jpg",
                        Type = "ImgDanmu",
                        Width = 200,
                        Height = 200
                    });
                    _context.ImgDanmus.Add(new ImgDanmu
                    {
                        Url = "https://img.3dmgame.com/uploads/images/thumbnews/20190714/1563098831_268303.jpg",
                        Type = "ImgDanmu",
                        Width = 200,
                        Height = 200
                    });
                }

                await _context.SaveChangesAsync();
            }
        }
    }
}