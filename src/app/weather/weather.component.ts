/// <reference types="@types/googlemaps" />

import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DarkskyWeatherServiceService } from '../services/darksky-weather-service.service';
import WeatherConstant from "../weather.constants";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  public weatherInfo = {};
  public locationInfo = {};
  public weatherIconClass = "wi wi-day-sunny-overcast";
  public forecasts = [];

  @ViewChild("city")
  public City: ElementRef;

  constructor(private darkskyWeatherServiceService: DarkskyWeatherServiceService, private changeDetection: ChangeDetectorRef){}

  ngOnInit() {
    this.getCoordiantes();
  }

  public getCoordiantes(){
    var searchBox = new google.maps.places.SearchBox(this.City.nativeElement);
    searchBox.addListener('places_changed', () => {
      this.weatherInfo = {};
      var locale = searchBox.getPlaces()[0];
      const latitutde = locale.geometry.location.lat();
      const longitude = locale.geometry.location.lng();
      this.getweather(latitutde, longitude);
    });
  }

  public getweather(latitutde, longitude){
      this.darkskyWeatherServiceService.getCurrentWeather(latitutde, longitude)
      .subscribe(data => {
        const celsius = this.convertFahrenheitToCelsius(data.currently.temperature);
        this.weatherInfo = data;
        this.forecasts = [...data.daily.data.slice(1, 6)];
        // this.forecasts = data.daily.data.slice(1, 6);
        console.log(this.forecasts);
        this.changeDetection.detectChanges();
    });
  }

  public findRightWeatherIconOnToday (){
    if(this.weatherInfo){
      const key = Object.keys(WeatherConstant).find( weather=> this.weatherInfo["currently"]["summary"].toLowerCase().indexOf(weather) > -1);
      return WeatherConstant[key];
    }
  }

  public findRightWeatherForecastIcon (forecast){
    if(this.weatherInfo){
      const key = Object.keys(WeatherConstant).find( weather=> forecast.toLowerCase().indexOf(weather) > -1);
      return WeatherConstant[key];
    }
  }


  public clearWeatherInfo(){
    if(this.City && !this.City.nativeElement.value){
      this.weatherInfo = {};
    }
  }

  public convertFahrenheitToCelsius(temperatureInFahrenheit){
    return ((parseFloat(temperatureInFahrenheit) - 32) * 5 / 9).toFixed(1);
  }

  public getChildForecast(forecast){
    return forecast.replace(/-/gi, " ");
  }
}
