import React from 'react';
import Danmu from '../Components/DanMu';
import "./DanmuPage.css"


const DanmuPage: React.FC = () => {
  return (
    <div className="danmuPage">
      <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" 
        id="testVideo"
        autoPlay
      >
        your browser is not support video
      </video>
      <Danmu width={1280} height={720} />
    </div>
  )
}

export default DanmuPage;
