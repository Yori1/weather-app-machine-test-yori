import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DirectGeocodingResult } from '../models/DirectGeocodingResult';
import { SharedModule } from '../shared.module';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { switchMap, map } from 'rxjs/operators';
import { BasicWeatherReport } from '../models/BasicWeatherReport';

@Injectable({
  providedIn: SharedModule
})
export class OpenWeatherService {

  constructor(private http: HttpClient) { }

  getCurrentWeatherInformationByLonLan(lon: number, lat: number): Observable<BasicWeatherReport> {
    return this.http.get<BasicWeatherReport>(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${environment.openWeatherApiKey}`);
  }

  getCurrentWeatherInformationByCity(cityName: string): Observable<BasicWeatherReport> {
    return this.getDirectGeocodingResult(cityName)
      .pipe(switchMap(r => this.getCurrentWeatherInformationByLonLan(r[0].lon, r[0].lat)))
      .pipe(map(r =>
        (
          {...r,
            weather: [{...r.weather[0], icon: `http://openweathermap.org/img/wn/${r.weather[0].icon}@4x.png`}],
            main: {...r.main, temp: Math.round(r.main.temp * 10) / 10 }
          }
        )
         ))
  }

  getDirectGeocodingResult(cityName: string): Observable<DirectGeocodingResult[]> {
    return this.http.get<DirectGeocodingResult[]>(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=10&appid=${environment.openWeatherApiKey}`);
  }
}
