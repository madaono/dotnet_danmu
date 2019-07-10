import { IDanmuTrack, IDanmuTrackInfo} from './interface/ItDanmuTrack'
import { IDanmuMessage } from './interface/IDanmuMessage'
import Danmu from './index'
import { DanmuPool } from './DanmuPool'

export class DanmuTrack implements IDanmuTrack {
  _Danmu?: Danmu;
  _DanmuPool: DanmuPool;
  danmuMessages: IDanmuMessage[] = new Array<IDanmuMessage>()

  constructor(danmuPool: DanmuPool, danmuTrackConfig: IDanmuTrackInfo) {
    this._DanmuPool = danmuPool
    console.log('danmuTrackConfig', danmuTrackConfig)
  }

  setDanmuku(danmuku: Danmu): void {
    this._Danmu = danmuku
  }
}