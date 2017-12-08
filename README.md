# Society of Tomorrow
#### _Variance of Population Distribution by agegroup among world's countries_

[LIVE](https://tocarevmax.github.io/Society-of-Tomorrow/)

### Background and Overview

Society of Tomorrow is an animated demonstration of how composition of a country's population is distributed among age groups and how it compares to other countries of the world.

### Functionality & MVP  

Society of Tomorrow incorporates the following features:

* AJAX queries to U.S. Census Bureau's API endpoint.
* Parsing of data received from the API and expanded data points through mathematical formulas for ratio calculations.
* Mapping, scaling and rendering of a chart using D3.js library with an ability to re-render when new data is passed.
* Smooth transition on re-rendering.
* Tooltip appearing when hovering over slice of chart that shows numbers behind the calculation.

### Demo

![wireframes](https://raw.githubusercontent.com/tocarevmax/Society-of-Tomorrow/master/docs/wireframes/main.png)

### Architecture and Technologies

Society of Tomorrow was implemented using the following technologies:

- Vanilla JavaScript for main structure and data parsing,
- `JQuery` for fetching API data through AJAX requests,
- `D3.js` for DOM manipulation and rendering,
- `Webpack` to bundle up JavaScript file tree.

### Future Directions

There is a number of exciting future development opportunities that this project presents:

- [ ] Separate _Total population_ chart demonstrating increase/decline of total population over decades.
- [ ] Animated comparison of population distribution from year-to-year.
