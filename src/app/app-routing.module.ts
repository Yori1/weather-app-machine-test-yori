import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchingComponent } from './search/container/searching/searching.component';
import { SearchModule } from './search/search.module';

const routes: Routes = [
  { path: 'searching', component: SearchingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SearchModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
