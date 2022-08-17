import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchingComponent } from './container/searching/searching.component';



@NgModule({
  declarations: [
    SearchingComponent
  ],
  exports: [
    SearchingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SearchModule { }
