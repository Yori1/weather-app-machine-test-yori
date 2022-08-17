import { Component, OnInit } from '@angular/core';
import { OpenWeatherService } from 'src/app/shared/open.weather.service';

@Component({
  selector: 'search-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.scss']
})
export class SearchingComponent implements OnInit {

  searchTerm = "";

  constructor(private openWeatherService: OpenWeatherService) { }

  ngOnInit(): void {
  }

  submit() {
    this.openWeatherService.getCurrentWeatherInformation();
  }

}
