import {fetchPopulationByCountryYear} from './util/census_api_util';
import parseData from './util/parse_census_data';
import {extractGender} from './util/selectors.js';
import drawChart from './charts/agegroup';


fetchPopulationByCountryYear('US', 1991)
  .then((res) => {
    if ((res) && (res[1][2])) {
      // console.log(res[1][45]);
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
      console.log('error fetching data');
    }

  });
