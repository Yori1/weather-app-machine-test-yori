import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherOverviewComponent } from './container/weather-overview/weather-overview.component';
import { SharedModule } from '../shared/shared.module';
import { WeatherBasicComponent } from './presentational/weather-basic/weather-basic.component';



@NgModule({
  declarations: [
    WeatherOverviewComponent,
    WeatherBasicComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class WeatherOverviewModule { }
