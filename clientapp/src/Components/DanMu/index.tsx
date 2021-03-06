import React, {Component} from 'react';
import { IDanmuTrack } from './interface/IDanmuTrack'
import { IDanmuConfig, IDanmuState } from './interface/IDanmuConfig'
import DanmuController from './DanmuController'
import { DanmuPool } from './DanmuPool';
import { DanmuTrack } from './DanmuTrack';
import TextMessage from './MessageTpl/TextMessage';
import ImgMessage from './MessageTpl/ImgMessage';
import { IDanmuPool } from './interface/IDanmuPool';

export default class Danmu extends Component<IDanmuConfig,IDanmuState> {
  private danmuTracks: Array<IDanmuTrack> = new Array<IDanmuTrack>()
  private _Canvas!: HTMLCanvasElement
  private _Ctx!: CanvasRenderingContext2D;
  private _TextDanmuPool: IDanmuPool
  private _ImgDanmuPool: IDanmuPool
  constructor(props: Readonly<IDanmuConfig>) {
    super(props);
    this.state = {
      isPause: false,
      lastRenderTime: 0
    }
    this._TextDanmuPool = new DanmuPool(200)
    this._ImgDanmuPool = new DanmuPool(20)
  }

  componentDidMount() {
    this._Ctx = this._Canvas.getContext('2d') as CanvasRenderingContext2D
    for (let i = 0; i < 6; i++) {
      let danmuTrack = new DanmuTrack(this._TextDanmuPool, {
        top: (10 + 30) * i + 10,
        height: 30
      })
      this.addDanmuTrack(danmuTrack)
    }

    let danmuTrack = new DanmuTrack(this._ImgDanmuPool, {
      top: 200,
      height: 30
    })
    // this.addMessages(list)
    this.addDanmuTrack(danmuTrack)

    this.getAllTextDanmu().then(res => {
      if(Array.isArray(res) && res.length > 0) {
        res.map(i => {
          if(!i.msg) return;
          this._TextDanmuPool.addMessage(
            new TextMessage({
              ...i
            })
          )
          return false
        })
      }
    });
    this.getAllImgDanmu().then(res => {
      if(Array.isArray(res) && res.length > 0) {
        res.map((i) => {
          if(!i.url) return;
          this._ImgDanmuPool.addMessage(
            new ImgMessage({
              ...i
            })
          )
          return false
        })
      }
    });
    // this._ImgDanmuPool.addMessage(
    //   new ImgMessage({
    //     url: "https://img.3dmgame.com/uploads/images/thumbnews/20190713/1563013911_274314.jpg",
    //     width: 300,
    //     height: 300
    //   })
    // )

    // setInterval(() => {
      // this._TextDanmuPool.addMessage(
      //   new TextMessage({
      //     msg: "werhowfsndfkjs",
      //   })
      // )
    // }, 100)
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

  getAllImgDanmu = () => {
    return fetch('/Danmu/GetAllImgDanmu')
      .then(res => res.json())
      .then(res => res)
  }

  getAllTextDanmu = () => {
    return fetch('/Danmu/GetAllTextDanmu')
      .then(res => res.json())
      .then(res => res)
  }
  sendTextMsg = (msg: string): void => {
    this._TextDanmuPool.addMessage(
      new TextMessage({
        msg,
        self: true
      })
    )
    fetch('/Danmu/SendTextDanmu', {
      headers: { 
          "Content-Type": "application/json"
      },
      method: 'POST',
      body:  JSON.stringify({
        Msg:msg,
        Type:"TextDanmu",
        Color:"#fff",
        FontSize: 23,
        FontFamily: "黑体"
      })
    })
  }

  sendImgMsg = (url: string): void => {
    this._ImgDanmuPool.addMessage(
      new ImgMessage({
        url,
        width:300,
        height:300
      })
    )
    fetch('/Danmu/SendImgDanmu', {
      headers: { 
          "Content-Type": "application/json"
      },
      method: 'POST',
      body:  JSON.stringify({
        Url: url,
        Type:"ImgDanmu",
        Width:200,
        Height:200
      })
    })
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
          sendTextMsg = {this.sendTextMsg}
          sendImgMsg = {this.sendImgMsg}
        />
      </div>
    )
  }

}