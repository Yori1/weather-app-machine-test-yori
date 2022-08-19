import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DetailedWeatherReport } from "../../models/detailed.weather.report";
import { SharedModule } from "../../shared.module";
import { WeatherApi } from "./weather.api";
import { WeatherState } from "./weather.state";
import { first } from "rxjs/operators";
import { BasicWeatherReport } from "../../models/basic.weather.report.ts";

@Injectable({
    providedIn: SharedModule
  })
export class WeatherFacade {
    $selectedReport: Observable<DetailedWeatherReport>;
    $selectableReports: Observable<DetailedWeatherReport[]>;

    constructor(private weatherState: WeatherState, private weatherApi: WeatherApi) {
        this.$selectedReport = weatherState.getSelectedReport();
        this.$selectableReports = weatherState.getSelectableReports();
    }

    initialize(cityName: string) {
        this.weatherApi.getCurrentWeatherInformationByCity(cityName)
            .pipe(first())
            .subscribe((r: BasicWeatherReport) => {
                const reportToSelect: DetailedWeatherReport = { basicWeatherReport: r };
                this.weatherState.changeSelectedReport(reportToSelect);
            });
    }

}