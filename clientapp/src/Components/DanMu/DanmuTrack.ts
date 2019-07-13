import { IDanmuTrack, IDanmuTrackInfo} from './interface/IDanmuTrack'
import { IDanmuMessage } from './interface/IDanmuMessage'
import { DanmuPool } from './DanmuPool'
import { IDanmuTrackConfig } from './interface/IDanmuConfig';

export class DanmuTrack implements IDanmuTrack {
  protected _DanmuPool: DanmuPool;
  public danmuMessages: IDanmuMessage[] = new Array<IDanmuMessage>()
  private _DanmuTrackInfo: IDanmuTrackInfo = {
    maxWidth: 0,
    top: 0,
    height: 0
  };

  constructor(danmuPool: DanmuPool, danmuTrackConfig: IDanmuTrackConfig) {
    this._DanmuPool = danmuPool
    this.initConfig(danmuTrackConfig)
  }

  initConfig = (danmuTrackConfig: IDanmuTrackConfig) => {
    this._DanmuTrackInfo.top = danmuTrackConfig.top;
    this._DanmuTrackInfo.height = danmuTrackConfig.height;
  }

  refreshMessage = (ctx: CanvasRenderingContext2D) => {
    this.removeMessage()
    this.addMessage(ctx)
  }

  addMessage = (ctx: CanvasRenderingContext2D) => {
    if(this._DanmuTrackInfo.maxWidth < ctx.canvas.width - 10) {
      let msg = this._DanmuPool.getMessage()
      if(msg) {
        this.danmuMessages.push(msg)
      }
    }
  }
  
  removeMessage = () => {
    this.danmuMessages = this.danmuMessages.filter(item => !item.distoryed)
  }

  renderDanmu = (ctx: CanvasRenderingContext2D) => {
    this.refreshMessage(ctx);
    for (let i = 0; i < this.danmuMessages.length; i++) {
      let currentDanmuMessage = this.danmuMessages[i]
      currentDanmuMessage.onBaseMeasure(ctx, this._DanmuTrackInfo)
      currentDanmuMessage.onBaseLayout(ctx, this._DanmuTrackInfo)
      currentDanmuMessage.onBaseDraw(ctx, this._DanmuTrackInfo)
      currentDanmuMessage.onBaseDestroyed()
      if (i === this.danmuMessages.length - 1) {
        this._DanmuTrackInfo.maxWidth = currentDanmuMessage.position.left + currentDanmuMessage.size.width
      }
    }
  }
}