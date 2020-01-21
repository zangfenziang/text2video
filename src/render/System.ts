type Data = any;

class System{
  ctx: CanvasRenderingContext2D;
  vector: Data;
  constructor(ctx: CanvasRenderingContext2D){
    this.ctx = ctx;
  }
}
export default System;