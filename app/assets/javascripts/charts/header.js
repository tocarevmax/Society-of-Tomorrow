import * as d3 from 'd3';


export const addCountryName = (data) => {
  const div = d3.select('.chart-header').selectAll('div')
              .data(data);

  const enterDiv = div.enter()
              .append("div");

  div.merge(enterDiv)
      .text(d => d);
};

export const addYear = (data) => {
  const div = d3.select('.chart-footer').selectAll('div')
              .data(data);

  const enterDiv = div.enter()
              .append("div");

  div.merge(enterDiv)
      .text(d => d);
};
