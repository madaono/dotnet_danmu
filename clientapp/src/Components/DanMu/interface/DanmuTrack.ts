import { DanmuMessage } from './DanmuMessage'
import Danmu from '..';

export interface DanmuTrack{
  danmuMessages: Array<DanmuMessage>
  setDanmuku(danmuku:Danmu):void,
  render(ctx: CanvasRenderingContext2D):void
}

export interface DanmuTrackInfo{
  maxWidth: number,
  top: number,
  height: number
}