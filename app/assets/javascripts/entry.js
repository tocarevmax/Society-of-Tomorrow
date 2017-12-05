import {fetchPopulationByCountryYear} from './util/census_api_util';
import parseData from './util/parse_census_data';
import {extractGender} from './util/selectors.js';
import drawChart from './charts/agegroup';


fetchPopulationByCountryYear('US', 2030)
  .then((res) => {
    let parsed = parseData(res);
    let males = extractGender(parsed, 'M');
    let females = extractGender(parsed, 'F');
    console.log(parsed);
    console.log(males);
    console.log(females);

    drawChart('males', males);
    drawChart('females', females);
  });
