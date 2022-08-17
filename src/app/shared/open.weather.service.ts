import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DirectGeocodingResult } from './models/DirectGeocodingResult';
import { SharedModule } from './shared.module';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: SharedModule
})
export class OpenWeatherService {

  constructor(private http: HttpClient) { }

  getCurrentWeatherInformation() {

  }

  getDirectGeocodingResult(cityName: string): Observable<DirectGeocodingResult> {
    return this.http.get<DirectGeocodingResult>(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=10&appid=${environment.openWeatherApiKey}`);
  }
}
