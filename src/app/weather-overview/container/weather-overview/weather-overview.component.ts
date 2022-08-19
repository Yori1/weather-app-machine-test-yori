import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { BasicWeatherReport } from 'src/app/shared/models/basic.weather.report.ts';
import { WeatherApi } from 'src/app/shared/services/weather/weather.api';
import { WeatherFacade } from 'src/app/shared/services/weather/weather.facade';

@Component({
  selector: 'weather-weather-overview',
  templateUrl: './weather-overview.component.html',
  styleUrls: ['./weather-overview.component.scss']
})
export class WeatherOverviewComponent implements OnInit {

  cityName!: string;

  constructor(private route: ActivatedRoute, public weatherFacade: WeatherFacade) { }

  ngOnInit(): void {
    this.route.params
      .pipe(first())
      .subscribe(params => {
        this.cityName = params["city"];
        this.weatherFacade.initialize(this.cityName);
      });
  }

}
