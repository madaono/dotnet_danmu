import { IDanmuMessage } from './IDanmuMessage'
// import Danmu from '..';

export interface IDanmuTrack{
  danmuMessages: Array<IDanmuMessage>
  // setDanmuku(danmuku:Danmu):void,
  renderDanmu(ctx: CanvasRenderingContext2D):void
  refreshMessage(ctx: CanvasRenderingContext2D):void
  addMessage(ctx: CanvasRenderingContext2D):void
  removeMessage():void
}

export interface IDanmuTrackInfo{
  maxWidth: number,
  top: number,
  height: number
}