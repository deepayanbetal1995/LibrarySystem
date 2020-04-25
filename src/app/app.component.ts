import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LibrarySystem';


  constructor(private _router: Router) { }

  onClickReg():void{
    this._router.navigate(['/registration']);
  }

  onClickLogin():void{
    this._router.navigate(['/login']);
  }

  onClickBookShow():void{
    this._router.navigate(['/bookshow']);
  }

  onClickAdmin():void{
    this._router.navigate(['/admin']); 
  }
}
