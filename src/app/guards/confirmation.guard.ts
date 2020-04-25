import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

import { FormGroup } from '@angular/forms';



export interface canRegistrationComponent {

  confirm(): boolean;
  RegistrationForm: FormGroup;
  

}

@Injectable({
  providedIn: 'root'
})
export class ConfirmationGuard implements CanDeactivate<canRegistrationComponent> {

  canDeactivate(
    component: canRegistrationComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    
    if (component.RegistrationForm.dirty) {
      return component.confirm();
    }
    else
      return true;
    
  }



}
