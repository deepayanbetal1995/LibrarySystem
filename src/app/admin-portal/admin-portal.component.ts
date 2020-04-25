import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent implements OnInit {

  adminForm : FormGroup;
  constructor(private _router : Router, private _fb:FormBuilder) { }

  ngOnInit() {

    this.adminForm = this._fb.group
  (
    {
      adminId:[''],
      adminPassword:['']
    }
  )

  }

  

  
  lazyLoad():any{
    this._router.navigate(['dashboard']);
    console.log('in the admin portal');
  }

}
