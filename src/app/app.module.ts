import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchModule } from './search/search.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherOverviewModule } from './weather-overview/weather-overview.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    WeatherOverviewModule,
    SearchModule,

    BrowserModule,
    AppRoutingModule,
    SearchModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
