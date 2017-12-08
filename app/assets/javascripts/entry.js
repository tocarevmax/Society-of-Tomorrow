import {fetchPopulationByCountryYear} from './util/census_api_util';

import drawChart from './charts/agegroup';
import {addCountryName, addYear, clickCallback, addLinks} from './charts/helpers';




// const arrayOfLinks = [];
//
// for (let i = 1980; i <= 2050; i++) {
//   arrayOfLinks.push(i);
// }

const arrayOfCountries = [
  {country: 'United States', code: 'US'},
  {country: 'United Arab Emirates', code: 'AE'},
  {country: 'Canada', code: 'CA'},
  {country: 'Mexico', code: 'MX'},
  {country: 'China', code: 'CH'},
  {country: 'Afghanistan', code: 'AF'},
  {country: 'Brazil', code: 'BR'},
  {country: 'Russia', code: 'RS'},
  {country: 'Australia', code: 'AU'},
  {country: 'Argentina', code: 'US'},
  {country: 'Congo', code: 'CG'},
  {country: 'Indonesia', code: 'ID'},
  {country: 'Saudi Arabia', code: 'SA'},
  {country: 'Colombia', code: 'CO'},
  {country: 'Nigeria', code: 'NI'},
  {country: 'Turkey', code: 'TU'},
  {country: 'Chile', code: 'CI'},
  {country: 'France', code: 'FR'},
  {country: 'United Kingdom', code: 'UK'},
  {country: 'Greece', code: 'GR'},
  {country: 'Germany', code: 'GM'},
];



document.addEventListener("DOMContentLoaded", () => {
  addLinks(arrayOfCountries);

  for (let i = 0; i < arrayOfCountries.length; i++) {
    $(`.${arrayOfCountries[i].country.split(" ").join("-")}`).click(() => {
      clickCallback(arrayOfCountries[i].code, 2018);
    });
  }

    clickCallback('US', 2018);
    clickCallback('US', 2018);

});
