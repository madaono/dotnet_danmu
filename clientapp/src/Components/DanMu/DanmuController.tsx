import React from 'react';

const DanmuController: React.FC = (props) => {
  return (
    <div className="App">
      <button>播放暂停</button>
      <label htmlFor="textDm">普通弹幕</label>
      <input type="text" id="textDm" onKeyDown={(e) => {console.log('e',e)}}/>
    </div>
  );
}

export default DanmuController;