import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DirectGeocodingResult } from '../../models/direct.geocoding.result';
import { SharedModule } from '../../shared.module';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { switchMap, map } from 'rxjs/operators';
import { BasicWeatherReport } from '../../models/basic.weather.report.ts';

@Injectable({
  providedIn: SharedModule
})
export class WeatherApi {

  constructor(private http: HttpClient) { }

  getCurrentWeatherInformationByCity(cityName: string): Observable<BasicWeatherReport> {
    // OpenWeather's API has a by city built-in geocoding function, but since it's less accurate than
    // the dedicated API, and is less accurate (according to docs), I chose to chain calls here
    return this.getDirectGeocodingResult(cityName)
      .pipe(switchMap(r => this.getCurrentWeatherInformationByLonLan(r[0].lon, r[0].lat)))
      .pipe(map(this.remapReportValues));
  }

  getCurrentWeatherInformationByLonLan(lon: number, lat: number): Observable<BasicWeatherReport> {
    return this.http.get<BasicWeatherReport>(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${environment.openWeatherApiKey}`);
  }

  getDirectGeocodingResult(cityName: string): Observable<DirectGeocodingResult[]> {
    return this.http.get<DirectGeocodingResult[]>(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=10&appid=${environment.openWeatherApiKey}`);
  }

  private remapReportValues(report: BasicWeatherReport): BasicWeatherReport {
    return {...report,
      weather: [{...report.weather[0], icon: `http://openweathermap.org/img/wn/${report.weather[0].icon}@4x.png`}],
      main: {...report.main, temp: Math.round(report.main.temp * 10) / 10 }
    };
  }
}
