import { Injectable } from "@angular/core";
import { EMPTY, Observable, ReplaySubject, Subject } from "rxjs";
import { filter, first, map } from "rxjs/operators";
import { BasicWeatherReport } from "../../models/basic.weather.report.ts";
import { DetailedWeatherReport } from "../../models/detailed.weather.report";
import { SharedModule } from "../../shared.module";

@Injectable({
    providedIn: SharedModule
  })
export class WeatherState {
    private $selectedReport: Subject<DetailedWeatherReport> = new ReplaySubject(1);
    private $selectableReports: Subject<DetailedWeatherReport[]> = new ReplaySubject(1);

    setSelectableWeatherReports(selectableWeatherReports: DetailedWeatherReport[]) {
        this.$selectableReports.next(selectableWeatherReports);
    }

    getSelectedReport(): Observable<DetailedWeatherReport> {
        return this.$selectedReport;
    }

    getSelectableReports(): Observable<DetailedWeatherReport[]> {
        return this.$selectableReports;
    }

    changeSelectedReport(weatherReportToSelect: DetailedWeatherReport) {
        this.$selectedReport.pipe(first()).subscribe(nowSelectedReport => {
            this.$selectableReports
            .pipe(map(arr =>{
                const index = arr.findIndex(r => r.basicWeatherReport.id == weatherReportToSelect.basicWeatherReport.id);
                arr.splice(index, 1, nowSelectedReport)
            }));
        });
        this.$selectedReport.next(weatherReportToSelect)
    }


}