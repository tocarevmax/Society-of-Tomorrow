import {fetchPopulationByCountryYear} from './api_util/census_api_util';

import * as d3 from 'd3';

window.d3 = d3;

fetchPopulationByCountryYear('US', 2000);
