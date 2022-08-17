import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { SearchingComponent } from './container/searching/searching.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SearchingComponent
  ],
  exports: [
    SearchingComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    SharedModule
  ]
})
export class SearchModule { }
