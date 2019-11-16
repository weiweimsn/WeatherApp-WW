# WeatherAppWW

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



Explanatin:

This app use Google Maps API and DarkSky api to get weather forecast for a specified city, I did not use Yahoo Weather API, I spent a few hours but the API OAuth setup failed. I also did not apply TDD due to limited time and I was sick on Thursday (Nov 14, 2019),  but the weather forecast challenge is completed.

Google Maps API is able to convert a city to a location with latitude and longitude, while DarkSky API can take latitude and longitude and return current weather and weather forecast for the following 7 days.

Steps to run the application:

1. git clone https://github.com/weiweimsn/WeatherApp-WW.git
2. npm install
3. npm start

Then you will be able to see a textbox with auto-complete capability, please enter a city name, for example, Toronto, you will see the current weather and following 5 days weather forecast, this is the coding challenge requirement, you are free to enter any city in the world.


