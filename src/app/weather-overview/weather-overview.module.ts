import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherOverviewComponent } from './container/weather-overview/weather-overview.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    WeatherOverviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class WeatherOverviewModule { }
