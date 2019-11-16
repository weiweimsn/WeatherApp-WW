import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from "@angular/common/http";
import { HttpTestingController} from '@angular/common/http/testing';

import { WeatherComponent } from './weather.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';

fdescribe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherComponent, WeatherForecastComponent ],
      providers:[HttpClient, HttpHandler, HttpTestingController]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // describe("getChildForecast function test", ()=>{
  //   it("should replace dash with empty space", () => {
  //     const testString = "1-2-3";
  //     const result = component.getChildForecast(testString);
  //     expect(result).toBe("1 2 3");
  //   })
  // })
});
