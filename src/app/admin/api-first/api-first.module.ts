import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { ApiFirstComponent } from './api-first.component';

const ROUTES: Array<Route> = [
  {
    path: '',
    component: ApiFirstComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    ApiFirstComponent
  ]
})
export class ApiFirstModule { }
