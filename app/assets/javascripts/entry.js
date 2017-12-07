import {fetchPopulationByCountryYear} from './util/census_api_util';

import drawChart from './charts/agegroup';
import {addCountryName, addYear, clickCallback, addLinks} from './charts/helpers';




const arrayOfLinks = [];

for (let i = 1980; i <= 2050; i++) {
  arrayOfLinks.push(i);
}



document.addEventListener("DOMContentLoaded", () => {
  addLinks(arrayOfLinks);

  for (let i = 0; i < arrayOfLinks.length; i++) {
    $(`.${arrayOfLinks[i]}`).click(() => {
      clickCallback('US', arrayOfLinks[i]);
    });


  }

    clickCallback('US', 2017);
    clickCallback('US', 2018);

});




// fetchArraybyCountry('US');

// window.resArray = resArray;





// const innerTimeoutCallback = (obj) => () => {
//   renderChart(obj);
// };
//
// while (resArray.length <= 11) {
//   setTimeout(() => {console.log("it's less than 10");}, 3000);
//
//   if (resArray.length === 11) {
//     debugger;
//     for (var i = 0; i < resArray.length; i++) {
//       setTimeout(innerTimeoutCallback(resArray[i]),1000);
//     }
//     break;
//   }
// }



// fetchPopulationByCountryYear('MD', 1999)
