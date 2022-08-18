import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { BasicWeatherReport } from 'src/app/shared/models/BasicWeatherReport';
import { OpenWeatherService } from 'src/app/shared/services/open.weather.service';

@Component({
  selector: 'weather-weather-overview',
  templateUrl: './weather-overview.component.html',
  styleUrls: ['./weather-overview.component.scss']
})
export class WeatherOverviewComponent implements OnInit {

  $basicWeatherReport!: Observable<BasicWeatherReport>;
  cityName!: string;

  constructor(private route: ActivatedRoute, private openWeatherService: OpenWeatherService) { }

  ngOnInit(): void {
    this.route.params
      .pipe(first())
      .subscribe(params => {
        this.cityName = params["city"];
        this.$basicWeatherReport = this.openWeatherService.getCurrentWeatherInformationByCity(this.cityName);
      });
  }

}
