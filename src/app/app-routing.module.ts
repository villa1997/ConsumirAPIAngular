import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatesComponent } from './components/dates/dates.component';


const routes: Routes = [
  { path: 'models', component: DatesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
