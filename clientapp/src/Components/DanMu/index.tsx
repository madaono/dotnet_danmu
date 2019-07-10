import React, {Component} from 'react';
import { DanmuTrack } from './interface/DanmuTrack'
import { DanmuConfig } from './interface/DanmuConfig'

export default class Danmu extends Component<DanmuConfig> {
  private danmuTracks: Array<DanmuTrack> = new Array<DanmuTrack>()
  constructor(props: Readonly<DanmuConfig>) {
    super(props);
    this.state = {
      isPause: false,
      lastRenderTime: 0
    }
  }
 
  render() {
    const {width, height} = this.props
    return(
      <canvas width={width} height={height} >
        your browser is not support canvas
      </canvas>
    )
  }

}