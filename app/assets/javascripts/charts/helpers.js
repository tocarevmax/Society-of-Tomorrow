import * as d3 from 'd3';
import drawChart from './agegroup';
import {fetchPopulationByCountryYear} from '../util/census_api_util';

import parseData from '../util/parse_census_data';
import {extractGender} from '../util/selectors.js';

const renderChart = ({year, country, parsed, males, females}) => {
  addCountryName([country]);
  addYear([year]);
  drawChart('males', males);
  drawChart('females', females);
};

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


export const addLinks = (data) => {
  const div = d3.select('.fetch-links').selectAll('div')
              .data(data);

  const enterDiv = div.enter()
              .append("a");

  div.merge(enterDiv)
      .attr("class", d => {
        return (d.country.split(" ").join("-"));
      })
      .text(d => d.country);
};

export const clickCallback = (country, year) => {
  return fetchPopulationByCountryYear(country, year)
    .then(renderChartAfterFetching);
};

const renderChartAfterFetching = (res) => {
  if ((res) && (res[1][2])) {

    let year = res[1][45];
    let country = res[1][0];

    addCountryName([country]);
    addYear([year]);

    // console.log(year);
    // console.log(country);
    // console.log(res);

    let parsed = parseData(res);
    let males = extractGender(parsed, 'M');
    let females = extractGender(parsed, 'F');
    // console.log(parsed);
    // console.log(males);
    // console.log(females);

    drawChart('males', males);
    drawChart('females', females);
  } else {
    // console.log('error fetching data');
  }
};
