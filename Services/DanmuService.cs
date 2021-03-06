using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dotsession.Data;
using dotsession.Models;

namespace dotsession.Services
{
    public class DanmuService: IDanmuService
    {
        private readonly DanmuContext _danmuContext;
        public DanmuService(DanmuContext danmuContext) => _danmuContext = danmuContext;

        public async Task<IList<TextDanmu>> GetAllTextDanmu()
        {
            await EnsureDatabaseCreatedAsync();
            var TextDanmus = _danmuContext.TextDanmus.ToList();
            return TextDanmus;
        }

        public async Task<IList<ImgDanmu>> GetAllImgDanmu()
        {
            await EnsureDatabaseCreatedAsync();
            var ImgDanmus = _danmuContext.ImgDanmus.ToList();
            return ImgDanmus;
        }

        public async Task AddTextDanmu(TextDanmu textDanmu)
        {
            _danmuContext.TextDanmus.Add(textDanmu);
            _danmuContext.SaveChanges();
        }
        
        public async Task AddImgDanmu(ImgDanmu imgDanmu)
        {
            _danmuContext.ImgDanmus.Add(imgDanmu);
            _danmuContext.SaveChanges();
        }
        private async Task EnsureDatabaseCreatedAsync()
        {
            var init = new DanmuDatabaseInitializer(_danmuContext);
            await init.CreateAndSeedDatabaseAsync();
        }
        
    }
}