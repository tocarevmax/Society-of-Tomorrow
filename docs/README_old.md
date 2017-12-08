# Society of Tomorrow
#### _Evolution of world's population - visualized_

### Background and Overview

Society of Tomorrow is an animated demonstration of how composition of a country's population is distributed among age groups and how it is evolving from mid-20th century and well into 2050.

Users will be able to look up nearly any country of interest on Earth and get visual explanation of where the country's society is moving backed by real-life data accumulated by U.S. Census Bureau.

### Functionality & MVP  

Society of Tomorrow will require the following for comprehensive implementation:

- [ ] Ability to seamlessly look up a country of interest, assisted by autocomplete.
- [ ] Properly structured AJAX queries to U.S. Census Bureau's API endpoint.
- [ ] Conversion of raw JSON into data-set ready to be fed into a chart algorithm.
- [ ] Mapping and rendering of a chart using D3.js library with an ability to re-render when new data is passed.
- [ ] Triggered animation causing timed re-rendering of the chart that would visualize population distribution and its comparison starting with the earliest year available and into 2050.
- [ ] Start, pause, restart the animation.
- [ ] Manual selection of a year using slider.
- [ ] Hover over slice of chart showing numbers behind the calculation.

### Wireframes

![wireframes](https://raw.githubusercontent.com/tocarevmax/Society-of-Tomorrow/master/docs/wireframes/main.png)

### Architecture and Technologies

Society of Tomorrow will be implemented using the following technologies:

- Vanilla JavaScript for main structure and data parsing,
- `JQuery` for fetching API data through AJAX requests,
- `D3.js` for DOM manipulation and rendering,
- `Webpack` to bundle up JavaScript file tree.

### Implementation Timeline

**Over the weekend**:

- [x] Conceptualizing, wireframes and planning.
- [x] Choosing appropriate technologies.
- [x] Obtaining API key at U.S. Census Bureau.
- [x] Writing and testing required AJAX requests.
- [x] Overview and intro to D3.js

**Day 1**: Setup and study Intro to D3.

- [ ] Complete Intro to D3 workshop.
- [ ] Setup basic file-structure: index.html, `webpack.config.js`, `package.json`.
- [ ] Start developing chart.

**Day 2**: Deep dive into D3

- [ ] Plot and map chart.
- [ ] Get core functionality of the graph working.

**Day 3**: Animation

- [ ] Slider.
- [ ] Re-rendering.
- [ ] Play, pause, reset, back, forward.

**Day 4**: Country search

- [ ] Review and improve work done on days 2 & 3.
- [ ] Auto-complete search field.
- [ ] Polishing

### Bonus features

There is a number of exciting future development opportunities that this project presents:

- [ ] Separate _Total population_ chart demonstrating increase/decline of total population over decades.
- [ ] Animated comparison of population distribution of the largest countries in the world for a year of interest.
