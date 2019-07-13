import React from 'react';
interface Props{
  trigerPlay(): void,
  sendTextMsg(msg: string): void,
  sendImgMsg(msg: string): void
}

const DanmuController: React.FC<Props> = (props) => {
  return (
    <div className="App">
      <button onClick={props.trigerPlay}>播放暂停</button>
      <br/>
      <label htmlFor="textDm">普通弹幕</label>
      <input type="text" id="textDm" onKeyDown={(e) => {
        if (e.keyCode === 13) {
          props.sendTextMsg(e.currentTarget["value"])
          e.currentTarget["value"] = ""
        }
      }}/>
      <br/>
      <label htmlFor="imgDm">请输入图片弹幕URL</label>
      <input type="text" id="imgDm" onKeyDown={(e) => {
        if (e.keyCode === 13) {
          props.sendImgMsg(e.currentTarget["value"])
          e.currentTarget["value"] = ""
        }
      }}/>
      
    </div>
  );
}

export default DanmuController;