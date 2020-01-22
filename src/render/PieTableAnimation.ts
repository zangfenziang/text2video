import Base from './Base';
import echarts from 'echarts';
type PieTableData = {
  value: number,
  name: string,
}[]
class PieTableAnimation extends Base{
  myChart: echarts.ECharts;
  constructor(tableData: PieTableData){
    super();
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 300;
    const myChart = echarts.init(canvas);
    const option = {
      series: [
          {
              name: 'PieTable',
              type: 'pie',
              radius: ['0%', '100%'],
              label: {
                  show: false
              },
              data: tableData,
              animationDurating: 1000,
          }
      ]
    };
    myChart.setOption(option);
    this.myChart = myChart;
  }
  render(ctx: CanvasRenderingContext2D){
    const url = this.myChart.getDataURL({});
    const img = new Image();
    img.src = url;
    requestAnimationFrame(()=>{
      ctx.drawImage(img, this.x, this.y);
    })
  }
}

export default PieTableAnimation;