export interface IDanmuConfig{
  width: number,
  height: number
}

export interface IDanmuTrackConfig{
  top: number,
  height: number
}


export interface IDanmuState{
  isPause: boolean,
  lastRenderTime: number
}