using System;

namespace dotsession.Models
{
    public class TextDanmu
    {
        public Guid DanmuId { get; set; }
        public string Msg { get; set; }
        public string Type { get; set; }
        public string Color { get; set; }
        public int FontSize { get; set; }
        public string FontFamily { get; set; }
    }
}