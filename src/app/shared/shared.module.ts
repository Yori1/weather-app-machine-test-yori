import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenWeatherService } from './open.weather.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    OpenWeatherService
  ]
})
export class SharedModule { }
