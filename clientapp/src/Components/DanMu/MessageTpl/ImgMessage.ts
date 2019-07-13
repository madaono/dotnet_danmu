import { BaseMessage } from "./BaseMessage";
import { IDanmuTrackInfo } from "../interface/IDanmuTrack";
import { Rect, Point } from "../interface/IDanmuMessage";

interface ImgMessageConfig {
  url: string,
  width?: number,
  height?: number
}

export default class ImgMessage extends BaseMessage{
  private config: ImgMessageConfig = {
    url: "",
    width: 0,
    height: 0
  }
  private mImg: HTMLImageElement = new Image()
  constructor(config: ImgMessageConfig) {
    super()
    this.config = Object.assign(this.config, config)
  }

  onCreate = (cb: Function) => {
    this.mImg.src = this.config.url
    this.mImg.style.position = 'fixed'
    this.mImg.style.top = '-1000px'
    this.mImg.style.left = '-1000px'

    this.mImg.onload = () => {
      this.config.width = this.config.width || this.mImg.width || 300
      this.config.height = this.config.height || this.mImg.height || 200
      cb(true)
    }

    this.mImg.onerror = () => {
      document.body.removeChild(this.mImg)
      cb(false)
    }

    document.body.appendChild(this.mImg as HTMLElement)
  }

  onMeasure = (): Rect => {
    return {
      width: this.config.width || 300,
      height: this.config.height || 200
    }
  }

  onLayout = (ctx: CanvasRenderingContext2D, trackInfo: IDanmuTrackInfo): Point => {
    if (!this.isLayout) {
      this.isLayout = true
      return {
        top: trackInfo.top,
        left: ctx.canvas.width
      }
    }
    this.position.left -= 3
    return this.position
  }

  onDraw = (ctx: CanvasRenderingContext2D, trackInfo: IDanmuTrackInfo): void => {
    ctx.drawImage(
      this.mImg,
      this.position.left,
      this.position.top,
      this.size.width,
      this.size.height
    )
  }

  onDestroyed = (): boolean => {
    let result = this.position.left < -this.size.width
    if (result) {
      // document.body.removeChild(this.mImg)
      console.log(this.mImg)
    }
    return result
  }
}