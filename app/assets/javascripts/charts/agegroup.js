import * as d3 from 'd3';
import * as scale from "d3-scale";

window.d3 = d3;
window.scale = scale;

const drawChart = (gender, data) => {
  d3.select(`.${gender}`)
    .selectAll('div')
      .data(data)
    .enter().append('div')
      .style('width', (d) => `${d.pct * 50}px`)
      .text((d) => d.pct);
};

export default drawChart;
