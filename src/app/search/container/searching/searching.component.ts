import { Component, OnInit } from '@angular/core';
import { OpenWeatherService } from 'src/app/shared/open.weather.service';
import { pipe } from 'rxjs';
import { first } from 'rxjs/operators';

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
    this.openWeatherService.getCurrentWeatherInformationByCity(this.searchTerm)
      .pipe(first())
      .subscribe(r => {
        console.log(JSON.stringify(r))
      });
  }

}
