import React, {Component} from 'react';
import { IDanmuTrack } from './interface/ItDanmuTrack'
import { IDanmuConfig, IDanmuState } from './interface/IDanmuConfig'
import DanmuController from './DanmuController'

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
    console.log('canvas is',this._Canvas)
    this._Ctx = this._Canvas.getContext('2d') as CanvasRenderingContext2D
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
    danmuTrack.setDanmuku(this)
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
      // danmuTracks.renderDanmu(this._Ctx)
      console.log(danmuTracks)
    }
  }
  
  render() {
    const {width, height} = this.props
    return(
      <div>
        <canvas width={width} height={height} ref={(_canvas: HTMLCanvasElement) => this._Canvas = _canvas}>
          your browser is not support canvas
        </canvas>
        <DanmuController />
      </div>
    )
  }

}