import { IDanmuTrackInfo } from "./IDanmuTrack";

export interface Point {
  top: number,
  left: number
}

export interface Rect {
  width: number,
  height: number
}
export interface IDanmuMessage {
  position: Point,
  size: Rect,
  created: boolean,
  distoryed: boolean,
  onBaseCreate(): void
  onBaseMeasure(ctx: CanvasRenderingContext2D, trackInfo: IDanmuTrackInfo): void
  onBaseLayout(ctx: CanvasRenderingContext2D, trackInfo: IDanmuTrackInfo): void
  onBaseDraw(ctx: CanvasRenderingContext2D, trackInfo: IDanmuTrackInfo): void
  onBaseDestroyed(): void
  onCreate(callback: Function): void
  onMeasure(ctx: CanvasRenderingContext2D, trackInfo: IDanmuTrackInfo): Rect
  onLayout(ctx: CanvasRenderingContext2D, trackInfo: IDanmuTrackInfo): Point
  onDraw(ctx: CanvasRenderingContext2D, trackInfo: IDanmuTrackInfo): void
  onDestroyed(): boolean
}