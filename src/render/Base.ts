abstract class Base{
  x: number;
  y: number;
  constructor(){
    this.x = this.y = 0;
  }
  abstract render(ctx: CanvasRenderingContext2D): void;
}

export default Base;