import { BaseMessage } from "./BaseMessage";
import { IDanmuTrackInfo } from "../interface/IDanmuTrack";
import { bool } from "prop-types";

interface TextMessageConfig {
  msg: string,
  color?: string,
  strokeColor?: string,
  fontSize?: number,
  fontFamily?: string,
  self?: boolean
}

export default class TextMessage extends BaseMessage {
  private config: TextMessageConfig = {
    msg: '',
    color: '#FFF',
    strokeColor: '#000',
    fontSize: 22,
    fontFamily: '黑体',
    self: false
  }
  constructor(config?: TextMessageConfig) {
    super()
    this.config = Object.assign(this.config, config)
  }

  onCreate = (cb: Function) => {
    cb(true)
  }

  onMeasure = (ctx: CanvasRenderingContext2D, trackInfo: IDanmuTrackInfo) => {
    ctx.font = `${this.config.fontSize}px ${this.config.fontFamily}`
    let res = ctx.measureText(this.config.msg)
    return {
      width: res.width,
      height: trackInfo.height
    }
  }

  onLayout = (ctx: CanvasRenderingContext2D, trackInfo: IDanmuTrackInfo) => {
    if (!this.isLayout) {
      this.isLayout = true
      return {
        top: trackInfo.top + trackInfo.height / 2,
        left: ctx.canvas.width
      }
    }
    this.position.left -= 3
    return this.position
  }

  onDraw = (ctx: CanvasRenderingContext2D, trackInfo: IDanmuTrackInfo) => {
    ctx.fillStyle = this.config.strokeColor || '#000'
    ctx.strokeText(this.config.msg, this.position.left, this.position.top)
    ctx.fillStyle = this.config.color || '#FFF'
    if (this.config.self) {
      ctx.fillStyle = "#bfa"
    }
    ctx.fillText(this.config.msg, this.position.left, this.position.top)
  }

  onDestroyed(): boolean {
    return this.position.left < -this.size.width
  }
}