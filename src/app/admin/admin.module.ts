import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AboutComponent } from './about/about.component';

const ROUTES: Array<Route> = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'api/first',
        loadChildren: './api-first/api-first.module#ApiFirstModule'
      }
    ]
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    AdminComponent,
    AboutComponent,
  ]
})
export class AdminModule { }
