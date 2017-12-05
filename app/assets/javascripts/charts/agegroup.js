import * as d3 from 'd3';
import * as scale from "d3-scale";

window.d3 = d3;
window.scale = scale;

var width = 250,
    barHeight = 20;

var x = scale.scaleLinear()
  .domain([0,12])
  .range([0,width]);

const drawChart = (gender, data) => {


  const offset = (d) => {
    if (gender === 'females') {
      return (300.5);
    } else {
      return (299.5 - x(d.pct));
    }
  };

  var chart = d3.select(`.${gender}`)
    .attr("width", width)
    .attr("height", barHeight * data.length);

  var bar = chart.selectAll("g")
      .data(data)
    .enter().append("g")
      .attr("transform", (d, i) => (`translate(${offset(d)},${i * barHeight})`));

  bar.append("rect")
      .attr("width", (d) => x(d.pct))
      .attr("height", barHeight - 1);

  bar.append("text")
      .attr("x", (d) => x(d.pct) - 3)
      .attr("y", barHeight / 2)
      .attr("dy", ".35em")
      .text((d) => d.pct);
};


// const drawChart = (gender, data) => {
//   d3.select(`.${gender}`)
//     .selectAll('div')
//       .data(data)
//     .enter().append('div')
//       .style('width', (d) => `${x(d.pct)}px`)
//       .text((d) => d.pct);
// };

export default drawChart;
