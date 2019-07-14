using System;
using System.ComponentModel.DataAnnotations;

namespace dotsession.Models
{
    public class Danmu
    {
        [Key]
        public int Id { get; set; }
//        public string Type { get; set; }
        public int DanmuId { get; set; }
//        public ImgDanmu ImgDanmu { get; set; }
//        public TextDanmu TextDanmu { get; set; }
    }
}