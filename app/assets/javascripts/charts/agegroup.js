import * as d3 from 'd3';
import * as scale from "d3-scale";

window.d3 = d3;
window.scale = scale;

var x = scale.scaleLinear()
  .domain([0,12])
  .range([0,200]);

const drawChart = (gender, data) => {
  d3.select(`.${gender}`)
    .selectAll('div')
      .data(data)
    .enter().append('div')
      .style('width', (d) => `${x(d.pct)}px`)
      .text((d) => d.pct);
};

export default drawChart;
