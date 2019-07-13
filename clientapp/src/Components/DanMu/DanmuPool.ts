import { IDanmuMessage } from "./interface/IDanmuMessage";
import { IDanmuPool } from "./interface/IDanmuPool";

export class DanmuPool implements IDanmuPool{
  public _PoolSize: number
  public _MessagePool: Array<IDanmuMessage|null> = new Array(this._PoolSize).fill(null)
  constructor(poolSize?: number) {
    this._PoolSize = poolSize || 20;
  }

  addMessage = (msg: IDanmuMessage) => {
    if(this._MessagePool.length < this._PoolSize) {
      this._MessagePool.push(msg)
    }else {
      console.log("can't push any more")
    }
  }

  addMessages = (msgArr: Array<IDanmuMessage>) => {
    if((this._MessagePool.length + msgArr.length) < this._PoolSize) {
      this._MessagePool.concat(msgArr)
    }else {
      console.log("can't push any more")
    }
  }

  getMessage = () => {
    const tempMessage = this._MessagePool.shift()
    if(tempMessage) {
      tempMessage.onBaseCreate()
    }
    return tempMessage || null
  }

  removeMessage = (msg: IDanmuMessage) => {
    let index = this._MessagePool.findIndex(item => item === msg)
    if (index > 0) {
      this._MessagePool[index] = null
    }
  }
}