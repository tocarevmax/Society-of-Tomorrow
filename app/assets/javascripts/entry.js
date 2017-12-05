import * as d3 from 'd3';
import * as scale from "d3-scale";

import {fetchPopulationByCountryYear} from './api_util/census_api_util';
import parseData from './api_util/parse_census_data';


window.d3 = d3;
window.scale = scale;

fetchPopulationByCountryYear('US', 2000)
  .then((res) => {
    console.log(parseData(res));
  });
