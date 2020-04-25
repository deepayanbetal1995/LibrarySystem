import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ConfirmationGuard } from './guards/confirmation.guard';
import { BookshowComponent } from './bookshow/bookshow.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';



const routes: Routes=[

  {path:'registration',component:RegistrationComponent, canDeactivate:[ConfirmationGuard]},
  {path:'login',component:LoginComponent},
  {path:'bookshow', component:BookshowComponent},
  {path: 'admin', component: AdminPortalComponent},
  {path:'dashboard', loadChildren:'src/app/admin-portal/admin-portal-module/admin-portal-module.module#AdminPortalModuleModule'}
];

@NgModule({
  providers:[ConfirmationGuard],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
