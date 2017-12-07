import * as d3 from 'd3';
import * as scale from "d3-scale";

window.d3 = d3;
window.scale = scale;


var margin = {top: 20, right: 30, bottom: 30, left: 40},
    mainWidth = 700 - margin.left - margin.right,
    mainHeight = 450 - margin.top - margin.bottom;

var width = (mainWidth / 2.5),
    barHeight = 20;

var x = scale.scaleLinear()
  .range([0,width]);


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

var tooltip;

document.addEventListener("DOMContentLoaded", () => {
  var mainChart = d3.select('.chart')
      .attr("width", mainWidth + margin.left + margin.right)
      .attr("height", mainHeight + margin.top + margin.bottom);

  mainChart.append("g")
      .attr("class", "x axis")
      .attr("transform", `translate(97,${margin.top + 360})`)
      .call(generateXaxis(x.domain([12,0])));

  mainChart.append("g")
      .attr("class", "x axis")
      .attr("transform", `translate(349,${margin.top + 360})`)
      .call(generateXaxis(x.domain([0,12])));

  mainChart.append("g")
      .attr("class", "y axis")
      .attr("transform", `translate(97,${margin.top-10})`)
      .call(yAxis);

  mainChart.append("text")
      .attr("class", "gender-labels")
      .attr("x", "250")
      .attr("y", `${margin.top}`)
      .text("MALE");

  mainChart.append("text")
      .attr("class", "gender-labels")
      .attr("x", "510")
      .attr("y", `${margin.top}`)
      .text("FEMALE");

  mainChart.append("text")
      .attr("class", "axis-labels")
      .attr("x", "88")
      .attr("y", `${margin.top- 1}`)
      .text("Age Group");

  mainChart.append("text")
      .attr("class", "axis-labels")
      .attr("x", "230")
      .attr("y", `${margin.top + 390}`)
      .text("Percentage of total population");

  mainChart.append("text")
      .attr("class", "source")
      .attr("x", "600")
      .attr("y", `${margin.top + 390}`)
      .text("Source: U.S. Census Bureau");

  tooltip = d3.select("body").append("div").attr("class", "toolTip");
});


x.domain([0,12]);

const drawChart = (gender, data) => {

  const offset = (d) => {
    if (gender === 'females') {
      return (350.5);
    } else {
      return (349.5 - x(d.pct));
    }
  };

  var chart = d3.select(`.${gender}`)
    .attr("width", width)
    .attr("height", barHeight * data.length);

  var bar = chart.selectAll("g")
      .data(data);

  var barEnter = bar.enter().append("g");
  barEnter.append("rect")
    .on("mousemove", function(d){
        tooltip
          .style("left", d3.event.pageX + 15 + "px")
          .style("top", d3.event.pageY + "px")
          .style("display", "inline-block")
          .html((d.pct));
    })
    .on("mouseout", function(d){ tooltip.style("display", "none");});

  bar.merge(barEnter)
    .transition()
    .duration(1000)
    .attr("transform", (d, i) => (`translate(${offset(d)},${margin.top + i * barHeight})`));


  bar.select('rect').merge(barEnter)
    .attr("height", barHeight - 1)
    .transition()
    .duration(1000)
    .attr("width", (d) => x(d.pct));

  bar.exit().remove();

};


// chart.selectAll("g").remove();
//
// var bar = chart.selectAll("g")
//     .data(data)
//   .enter().append("g")
//     .attr("transform", (d, i) => (`translate(${offset(d)},${margin.top + i * barHeight})`));
//
// bar.append("rect")
//     .attr("width", (d) => x(d.pct))
//     .attr("height", barHeight - 1);

// var chart = d3.select(`.${gender}`)
//   .attr("width", width)
//   .attr("height", barHeight * data.length);
//
// var bar = chart.selectAll("g")
//     .data(data)
//   .enter().append("g")
//     .attr("transform", (d, i) => (`translate(${offset(d)},${margin.top + i * barHeight})`));
//
// bar.append("rect")
//     .attr("width", (d) => x(d.pct))
//     .attr("height", barHeight - 1);




export default drawChart;
