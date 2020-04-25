import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import {canRegistrationComponent} from '../guards/confirmation.guard';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit , canRegistrationComponent{

 
  RegistrationForm : FormGroup;

  constructor(private _router: Router, private fb:FormBuilder) { }

  onClickLogin():void{
    this._router.navigate(['/login']);
  }

  ngOnInit() {

    this.RegistrationForm= this.fb.group
    (
      {
        firstName:['',Validators.required],
        middleName:[''],
        lastName:['',Validators.required],
        email:['',Validators.email],
        password:['',Validators.required],
        confPassword:['',this.passCheck]
      }
    )
  }

  passCheck(_fg:FormGroup){
    const pass= _fg.get('password');
    const confPassword= _fg.get('confPass');
    
    return pass ===confPassword ? null : {passwordNotMatch:true};
    

  }
  onSubmit():any{
    console.log(this.RegistrationForm.value);
    
    
  }

  confirm(){
    //  console.log('in else');
      return confirm('Do you really want to go back?');
    
    
  }

}
