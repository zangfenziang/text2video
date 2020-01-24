import PieTable from './PieTable';
import PieTableAnimation from './PieTableAnimation';
import TWEEN from '@tweenjs/tween.js';

type Data = PieTable[];

class System{
  ctx: CanvasRenderingContext2D;
  vector: Data;
  constructor(ctx: CanvasRenderingContext2D){
    this.ctx = ctx;
    const data = [
      {value: 335, name: '直接访问'},
      {value: 310, name: '邮件营销'},
      {value: 234, name: '联盟广告'},
      {value: 135, name: '视频广告'},
      {value: 1548, name: '搜索引擎'}
    ];
    const pieTableAnimation = new PieTableAnimation(data);
    const pieTable = new PieTable(data);
    pieTableAnimation.x = 400;
    this.vector = [pieTable, pieTableAnimation];
    requestAnimationFrame(this.animate);
  }
  public render = () => {
  }
  public animate = (time: number) => {
    requestAnimationFrame(this.animate);
    TWEEN.update(time);
    this.render();
  }
}
export default System;