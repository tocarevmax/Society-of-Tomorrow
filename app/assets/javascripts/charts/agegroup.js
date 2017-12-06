import * as d3 from 'd3';
import * as scale from "d3-scale";

window.d3 = d3;
window.scale = scale;


var margin = {top: 20, right: 30, bottom: 30, left: 40},
    mainWidth = 600 - margin.left - margin.right,
    mainHeight = 400 - margin.top - margin.bottom;

var width = (mainWidth / 2),
    barHeight = 20;

var x = scale.scaleLinear()
  .range([0,width]);

// var y = scale.scaleOrdinal()
//   .domain(["85+", "80-84", "75-79", "70-74", "65-69", "60-64", "55-59",
//            "50-54", "45-49", "40-44", "35-39", "30-34", "25-29", "20-24",
//            "15-19", "10-14", "5-9", "0-4"])
//   // .rangeRound([0,360], .1);
//   // .range([0,360]);

var yBand = scale.scaleBand()
  .domain(["", "85+", "80-84", "75-79", "70-74", "65-69", "60-64", "55-59",
           "50-54", "45-49", "40-44", "35-39", "30-34", "25-29", "20-24",
           "15-19", "10-14", "5-9", "0-4"])
   .rangeRound([0,380]);

window.yBand = yBand;

var yAxis = d3.axisLeft()
  .scale(yBand);

const generateXaxis = (sc) => (
  d3.axisBottom()
      .scale(sc)
      .tickValues([0,2,4,6,8,10])
      .tickFormat(d => d + "%")
);



document.addEventListener("DOMContentLoaded", () => {
  var mainChart = d3.select('.chart')
      .attr("width", mainWidth + margin.left + margin.right)
      .attr("height", mainHeight + margin.top + margin.bottom);

  mainChart.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(34,360)")
      .call(generateXaxis(x.domain([12,0])));

  mainChart.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(299,360)")
      .call(generateXaxis(x.domain([0,12])));

  mainChart.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(34,-10)")
      .call(yAxis);
});


x.domain([0,12]);

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

  // if (gender === 'males') {
  //   chart.append("g")
  //     .attr("class", "x axis")
  //     .attr("transform", "translate(34,360)")
  //     .call(xMAxis);
  // } else {
  //   chart.append("g")
  //     .attr("class", "x axis")
  //     .attr("transform", "translate(299,360)")
  //     .call(xAxis);
  // }
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
