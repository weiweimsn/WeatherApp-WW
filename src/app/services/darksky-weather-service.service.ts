import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FORECAST_ROOT,  FORECAST_KEY} from "./weatherService.constants";


@Injectable({
  providedIn: 'root'
})
export class DarkskyWeatherServiceService {

	constructor(private http: HttpClient) {}

	public getCurrentWeather(latitude: number, longitude: number): Observable<any> {
		const url = FORECAST_ROOT + FORECAST_KEY + '/' + latitude + ',' + longitude;
		const queryParams = '?callback=JSONP_CALLBACK';
		return this.http.jsonp(url + queryParams, 'callback').pipe(
		  map(data => data),
		  catchError(err => {
			console.error('Unable to get weather data - ', err);
			return throwError(err.json());
		  })
		);
	  }
}
