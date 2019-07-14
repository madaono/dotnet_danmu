using System;
using System.ComponentModel.DataAnnotations;

namespace dotsession.Models
{
    public class ImgDanmu
    {
        [Key]
        public int DanmuId { get; set; }
        public string Url { get; set; }
        public string Type { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
    }
}