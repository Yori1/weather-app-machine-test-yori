import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BasicWeatherReport } from 'src/app/shared/models/BasicWeatherReport';

@Component({
  selector: 'weather-weather-basic',
  templateUrl: './weather-basic.component.html',
  styleUrls: ['./weather-basic.component.scss']
})
export class WeatherBasicComponent implements OnInit {

  constructor() { }

  @Input() $basicWeatherReport!: Observable<BasicWeatherReport>;
  @Input() cityName!: string;

  ngOnInit(): void {
  }

}
