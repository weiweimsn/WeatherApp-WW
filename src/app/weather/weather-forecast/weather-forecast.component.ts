import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { WeatherComponent } from '../weather.component';
import { DarkskyWeatherServiceService } from 'src/app/services/darksky-weather-service.service';
import WeatherConstant from "../../weather.constants";

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent extends WeatherComponent implements OnInit {

  constructor(darkskyWeatherServiceService: DarkskyWeatherServiceService, changeDetection: ChangeDetectorRef) { 
    super(darkskyWeatherServiceService, changeDetection);
  }


  @Input() iconClass: string;
  @Input() minDegree: string;
  @Input() maxDegree: string;
  @Input() forecast: string;

  ngOnInit() {
  }
}
