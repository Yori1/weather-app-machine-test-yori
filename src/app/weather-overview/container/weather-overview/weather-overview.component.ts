import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { first } from 'rxjs/operators';
import { OpenWeatherService } from 'src/app/shared/open.weather.service';

@Component({
  selector: 'weather-weather-overview',
  templateUrl: './weather-overview.component.html',
  styleUrls: ['./weather-overview.component.scss']
})
export class WeatherOverviewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private openWeatherService: OpenWeatherService) { }

  ngOnInit(): void {
    this.route.params
      .pipe(first())
      .subscribe(params => console.log(params["city"]));
  }

}
