import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsViewComponent } from './cars-view/cars-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/carsView',
    pathMatch:'full'
  },
  {
    path: '**',
    component: CarsViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
