import * as d3 from 'd3';


export const addCountryName = (data) => {
  d3.select('.chart-header').selectAll('div')
      .data(data)
    .enter().append("div")
      .text(d => d);
};

export const addYear = (data) => {
  d3.select('.chart-footer').selectAll('div')
      .data(data)
    .enter().append("div")
      .text(d => d);
};
