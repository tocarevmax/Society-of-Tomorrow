import * as d3 from 'd3';


export const addCountryName = (data) => {
  d3.select('.country-header').selectAll('div')
      .data(data)
    .enter().append("div")
      .text(d => d);
};
