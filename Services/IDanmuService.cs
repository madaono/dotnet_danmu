using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using dotsession.Models;

namespace dotsession.Services
{
    public interface IDanmuService
    {
//        Task<IList<Danmu>> getAllDanmu(UserInfo userInfo);
        Task<IList<TextDanmu>> GetAllTextDanmu();
        Task<IList<ImgDanmu>> GetAllImgDanmu();
        Task UpdateTextDanmu(TextDanmu textDanmu);
        Task UpdateImgDanmu(ImgDanmu imgDanmu);
    }
}