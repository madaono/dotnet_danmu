using System;

namespace dotsession.Models
{
    public class ImgDanmu
    {
        public Guid DanmuId { get; set; }
        public string Url { get; set; }
        public string Type { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
    }
}