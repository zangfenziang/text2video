abstract class Base{
  x: number;
  y: number;
  width?: number;
  height?: number;
  constructor(){
    this.x = this.y = 0;
  }
  abstract render(ctx: CanvasRenderingContext2D): void;
  _render(ctx: CanvasRenderingContext2D, img: HTMLImageElement){
    if (this.width && this.height){
      ctx.drawImage(img, this.x, this.y, this.width, this.height);
    }
    else{
      ctx.drawImage(img, this.x, this.y);
    }
  }
}

export default Base;