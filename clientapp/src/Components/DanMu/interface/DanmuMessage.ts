export interface Point {
  top: number,
  left: number
}

export interface Rect {
  width: number,
  height: number
}
export interface DanmuMessage {
  position: Point,
  size: Rect,
  created: boolean,
  distoryed: boolean,
}