import { IDanmuMessage } from "./IDanmuMessage";

export interface IDanmuPool {
  _PoolSize:number,
  _MessagePool: Array<IDanmuMessage|null>
  addMessage(msg: IDanmuMessage): void
  addMessages(msg: Array<IDanmuMessage>): void
  getMessage(): IDanmuMessage|null
  removeMessage(msg: IDanmuMessage): void
}