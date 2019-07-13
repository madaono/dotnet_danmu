import React, {Component} from 'react';
import { IDanmuTrack } from './interface/IDanmuTrack'
import { IDanmuConfig, IDanmuState } from './interface/IDanmuConfig'
import DanmuController from './DanmuController'
import { DanmuPool } from './DanmuPool';
import { DanmuTrack } from './DanmuTrack';
import TextMessage from './MessageTpl/TextMessage';
import ImgMessage from './MessageTpl/ImgMessage';

export default class Danmu extends Component<IDanmuConfig,IDanmuState> {
  private danmuTracks: Array<IDanmuTrack> = new Array<IDanmuTrack>()
  private _Canvas!: HTMLCanvasElement
  private _Ctx!: CanvasRenderingContext2D;
  constructor(props: Readonly<IDanmuConfig>) {
    super(props);
    this.state = {
      isPause: false,
      lastRenderTime: 0
    }
  }

  componentDidMount() {
    this._Ctx = this._Canvas.getContext('2d') as CanvasRenderingContext2D
    const danmuPool = new DanmuPool(200)
    const imgDanmuPool = new DanmuPool(20)

    for (let i = 0; i < 6; i++) {
      let danmuTrack = new DanmuTrack(danmuPool, {
        top: (10 + 30) * i + 10,
        height: 30
      })
      this.addDanmuTrack(danmuTrack)
    }

    let danmuTrack = new DanmuTrack(imgDanmuPool, {
      top: 400,
      height: 30
    })

    this.addDanmuTrack(danmuTrack)

    danmuPool.addMessage(
      new ImgMessage({
        url: "https://img.3dmgame.com/uploads/images/thumbnews/20190713/1563013911_274314.jpg",
        width: 300,
        height: 300
      })
    )

    setInterval(() => {
      danmuPool.addMessage(
        new TextMessage({
          msg: "werhowfsndfkjs",
        })
      )
    }, 100)
    this.renderByAnimationFrame()
  }
 
  trigerPlay = () => {
    this.setState(
      {
        isPause: !this.state.isPause
      }
    )
  }

  addDanmuTrack = (danmuTrack: IDanmuTrack) => {
    this.danmuTracks.push(danmuTrack)
  }

  removeDanmuTrack = (danmuTrack: IDanmuTrack) => {
    this.danmuTracks = this.danmuTracks.filter(item => item !== danmuTrack)
  }

  renderByAnimationFrame = () => {
    this.renderCanvas()
    requestAnimationFrame(this.renderByAnimationFrame)
  }

  renderBySetInterval = () => {
    setInterval(this.renderCanvas, 0)
  }

  renderCanvas = () => {
    if(this.state.isPause) return;
    this._Ctx.clearRect(0, 0, this._Canvas.width, this._Canvas.height)
    for (let danmuTracks of this.danmuTracks) {
      danmuTracks.renderDanmu(this._Ctx)
    }
  }
  
  render() {
    const {width, height} = this.props
    return(
      <div>
        <canvas width={width} height={height} ref={(_canvas: HTMLCanvasElement) => this._Canvas = _canvas}>
          your browser is not support canvas
        </canvas>
        <DanmuController 
          trigerPlay = {this.trigerPlay}
        />
      </div>
    )
  }

}