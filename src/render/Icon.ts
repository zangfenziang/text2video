import Base from './Base';
class Icon extends Base{
  img: HTMLImageElement;
  constructor(img: HTMLImageElement){
    super();
    this.img = img;
  }
  public render = (ctx: CanvasRenderingContext2D)=>{
    this._render(ctx, this.img);
  }
}
export default Icon;