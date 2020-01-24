import uuid from 'uuid';
import React from 'react';
import System from '../render';

type IState = {
  id: string,
  system?: System,
  url?: string,
}

class VideoCanvas extends React.Component<{}, IState>{
  constructor(props: {}){
    super(props);
    const id = uuid.v4();
    this.state = {id};
  }
  componentDidMount(){
    const canvas = document.getElementById(this.state.id) as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (ctx){
      const system = new System(ctx);
      this.setState({system});
    }
    // @ts-ignore
    const stream = canvas.captureStream(30) as MediaStream;
    // @ts-ignore
    const recorder = new MediaRecorder(stream, {
      mimeType: 'video/webm;codecs=vp9',
    });
    // @ts-ignore
    recorder.ondataavailable = e => {
      recorder.pause();
      const url = URL.createObjectURL(e.data);
      this.setState({url});
    }
    recorder.start(3000);
  }
  render(){
    const link = ()=>{
      if (this.state.url){
        return (
          <a href={this.state.url} target="_blank" rel="noopener noreferrer">Link</a>
        )
      }
    }
    return (
      <div className="VideoCanvas">
        <canvas id={this.state.id} width="800" height="600"></canvas>
        {link()}
      </div>
    )
  }
}

export default VideoCanvas;