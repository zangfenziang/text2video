import uuid from 'uuid';
import React from 'react';
import System from '../render';

type IState = {
  id: string,
  system?: System
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
  }
  render(){
    return (
      <div className="VideoCanvas">
        <canvas id={this.state.id} width="800" height="600"></canvas>
      </div>
    )
  }
}

export default VideoCanvas;