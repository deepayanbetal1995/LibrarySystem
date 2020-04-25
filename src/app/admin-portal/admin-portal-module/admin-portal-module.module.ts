import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';



export const ROUTES: Routes=[
  {path:'', component:DashboardComponent}
]
 

@NgModule({
  declarations: [DashboardComponent],
  exports:[],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class AdminPortalModuleModule {

  constructor(){
    console.log("in admin portal module");
  }
 }
