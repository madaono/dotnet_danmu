import { IDanmuMessage, Point, Rect } from "../interface/IDanmuMessage";
import { IDanmuTrackInfo } from "../interface/IDanmuTrack";

export abstract class BaseMessage implements IDanmuMessage {
  public created: boolean = false
  public distoryed: boolean = false
  public isLayout: boolean = false
  public position: Point = {
    top: 0,
    left: 0
  }
  public size: Rect = {
    width: 0,
    height: 0
  }

  onBaseCreate = (): void => {
    this.onCreate((val: boolean) => {
      val ? this.created = true : this.distoryed = true
    })
  }

  onBaseDestroyed = ():void => {
    this.distoryed = this.onDestroyed()
  }

  onBaseMeasure = (ctx: CanvasRenderingContext2D, trackInfo: IDanmuTrackInfo): void => {
    this.size = this.onMeasure(ctx,  trackInfo)
  }

  onBaseDraw = (ctx: CanvasRenderingContext2D, trackInfo: IDanmuTrackInfo): void => {
    this.onDraw(ctx, trackInfo)
  }

  onBaseLayout = (ctx: CanvasRenderingContext2D, trackInfo: IDanmuTrackInfo): void => {
    this.position = this.onLayout(ctx, trackInfo)
  }

  abstract onCreate(callback: Function): void
  abstract onMeasure(ctx: CanvasRenderingContext2D, trackInfo: IDanmuTrackInfo): Rect
  abstract onLayout(ctx: CanvasRenderingContext2D, trackInfo: IDanmuTrackInfo): Point
  abstract onDraw(ctx: CanvasRenderingContext2D, trackInfo: IDanmuTrackInfo): void
  abstract onDestroyed(): boolean
}