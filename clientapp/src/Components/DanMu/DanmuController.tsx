import React from 'react';
interface Props{
  trigerPlay():void
}

const DanmuController: React.FC<Props> = (props) => {
  return (
    <div className="App">
      <button onClick={props.trigerPlay}>播放暂停</button>
      <label htmlFor="textDm">普通弹幕</label>
      <input type="text" id="textDm" onKeyDown={(e) => {console.log('e',e)}}/>
    </div>
  );
}

export default DanmuController;