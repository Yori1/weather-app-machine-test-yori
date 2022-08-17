import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchModule } from './search/search.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), SearchModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
