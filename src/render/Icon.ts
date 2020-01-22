import Base from './Base';
class Icon extends Base{
  img: HTMLImageElement;
  constructor(img: HTMLImageElement){
    super();
    this.img = img;
  }
  public render = (ctx: CanvasRenderingContext2D)=>{
    ctx.drawImage(this.img, this.x, this.y);
  }
}
export default Icon;