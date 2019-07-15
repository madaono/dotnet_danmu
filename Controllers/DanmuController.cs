using System.Collections.Generic;
using System.Threading.Tasks;
using dotsession.Models;
using dotsession.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace dotsession.Controllers
{
    [Produces("application/json")]
    [ApiController]
    [Route("[controller]/[action]")]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public class DanmuController : ControllerBase
    {
        private readonly IDanmuService _danmuService;
        public DanmuController(IDanmuService service) => _danmuService = service;

        [HttpGet]
        public async Task<IList<TextDanmu>> GetAllTextDanmu()
        {
            return await _danmuService.GetAllTextDanmu();
            
        }

        [HttpGet]
        public async Task<IList<ImgDanmu>> GetAllImgDanmu()
        {
            return await _danmuService.GetAllImgDanmu();
        }  
        
        [HttpPost]
        public async void SendTextDanmu(TextDanmu textDanmu)
        { 
            await _danmuService.AddTextDanmu(textDanmu);
        } 
        
        [HttpPost]
        public async void SendImgDanmu(ImgDanmu imgDanmu)
        { 
            await _danmuService.AddImgDanmu(imgDanmu);
        }  

    }
}
