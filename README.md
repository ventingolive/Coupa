Pana Full Stack Code Challenge
--------------------

### The Challenge
Using the included API server and your code wizardry, the goal is to implement a sample front-end for one of our newest products, **Pana Flight Search**, using Backbone/Marionette (_or another similar framework_). Based on the provided screenshots, you will need to implement the basic layout including sorting and filtering.

### Requirements
##### Core Requirements
  - Query the API (and handle loading/erroring eloquently)
    - Your frontend should make a call to the provide API to query search results. For simplicity, the results will always be the same.
    - The API has a throttled api connection, so it could take 1 second or 10 seconds to return results.
    - The API has a random chance of failing (returning 500), make sure you handle any error states eloquently.
  - Display the data according to the mocks
    - [Flight Search Design](https://github.com/tivonahaug/pana-full-stack-challenge/blob/master/mocks/flight_search.png)
  - Implement filtering and sorting
    - [Layover Filter Dropdown](https://github.com/tivonahaug/pana-full-stack-challenge/blob/master/mocks/stops_filter.png)
    - [Airlines Filter Dropdown](https://github.com/tivonahaug/pana-full-stack-challenge/blob/master/mocks/airlines_filter.png)
    - [Sort by Dropdown 1](https://github.com/tivonahaug/pana-full-stack-challenge/blob/master/mocks/sort_by.png)
    - [Sort by Dropdown 2](https://github.com/tivonahaug/pana-full-stack-challenge/blob/master/mocks/sort_by_2.png)
  - Use Backbone/Marionette or another frontend JS framework
    - We have provided a boilerplate Backbone/Marionette project in the client directory (see *installation* below), however if you would like to build your own from scratch or use a different framework (React, Vue, Angular, or even vanilla JS), you're more than welcome to. We'll be judging on your ability to take designs, specifications, and data to create something usable, not your knowledge of Backbone and Marionette.
##### Extra Credit
  - [Implement Time-Based Filtering](https://github.com/tivonahaug/pana-full-stack-challenge/blob/master/mocks/flight_times_filter.png)
  - Make it mobile friendly! (We didn't provide any mocks for this, so use your imagination!)
  - A check-out page. (Again, no mocks, but we're curious what you would include.)

### Evaluation
  - **CSS**
    - How well you implement your styles including reusability and organization
    - We're looking for an implementation that is as close to the screenshots as possible
  - **JavaScript**
    - Cleanliness and organization of your code
    - Your ability to effectively leverage a framework
    - Appropriate use of known development patterns
  - **Fundamentals**
    - Grasp on the languages you're using
    - Sorting and filtering
    - How you handle unexpected errors and loading times
    - How you take unfamiliar data and understand it

### Installation
- __Client__
  - Located in `/client`
  - `$ npm install`
  - `$ npm run dev` to start the dev server
  - If you want to use a custom build or another framework, just make sure it lives in this directory.
- __API__
  - Located in `/server`
  - `$ npm install`
  - `$ npm start`

### Styleguide
- **Colors**
  - background: #F8FCFF
  - primary: #1A96FC
  - secondary: #EE3690
  - tertiary: #171AB2
  - quaternary: #FEC61E
  - quinary: #1BC98E
- **SASS** - All styles use the indented style styntax of sass (no brackets).
- **Grid System** - We've included a grid system library that is very similar to our internal built library. Documentation can be found at `http://flexboxgrid.com/`.

### Submission
When you're finished, zip the directory (excluding the node_modules) and email it to engineers@pana.com.

### Find a bug?
Bugs are a great way to earn bonus points! You can either create a Pull Request with a suggested fix or email engineers@pana.com with the bug, a suggested fix, and the subject line `Code Challenge Bug Report`.

### Job Description
http://pana.com/positions/VbB51B4AAI4Bpo4Q/software-engineer-full-stack-javascript