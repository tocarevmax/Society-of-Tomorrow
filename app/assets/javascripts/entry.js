import {fetchPopulationByCountryYear} from './util/census_api_util';
import parseData from './util/parse_census_data';
import {extractGender} from './util/selectors.js';
import drawChart from './charts/agegroup';
import {addCountryName, addYear} from './charts/header';

const renderChartAfterFetching = (res) => {
  if ((res) && (res[1][2])) {

    var year = res[1][45];
    var country = res[1][0];

    addCountryName([country]);
    addYear([year]);

    console.log(year);
    console.log(country);
    console.log(res);

    let parsed = parseData(res);
    let males = extractGender(parsed, 'M');
    let females = extractGender(parsed, 'F');
    console.log(parsed);
    console.log(males);
    console.log(females);

    drawChart('males', males);
    drawChart('females', females);
  } else {
    console.log('error fetching data');
  }
};

const clickCallback = (country, year) => {
  return fetchPopulationByCountryYear(country, year)
    .then(renderChartAfterFetching);
};

document.addEventListener("DOMContentLoaded", () => {
  $('#US-2000').click(() => {
    clickCallback('US',2000);
  });

  $('#US-2001').click(() => {
    clickCallback('MD',2001);
  });
});



// fetchPopulationByCountryYear('MD', 1999)
