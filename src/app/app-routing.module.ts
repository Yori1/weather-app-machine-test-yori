import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchingComponent } from './search/container/searching/searching.component';
import { SearchModule } from './search/search.module';
import { WeatherOverviewComponent } from './weather-overview/container/weather-overview/weather-overview.component';

const routes: Routes = [
  { path: 'searching', component: SearchingComponent },
  { path: 'weather-overview/by-city/:city', component: WeatherOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
