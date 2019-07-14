using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dotsession.Models;
using dotsession.Services;
using Microsoft.AspNetCore.Mvc;

namespace dotsession.Controllers
{
    [Produces("application/json","application/xml")]
    [Route("api/[controller]")]
    public class DanmuController : Controller
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
    }
}
