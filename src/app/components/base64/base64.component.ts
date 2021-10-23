import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import {MatSnackBar,MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';

@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
  styleUrls: ['./base64.component.scss']
})
export class Base64Component implements OnInit {

  constructor(private clipboard: Clipboard, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  encrypt(a,b){
    if(a.value)
    b.innerText = btoa(a.value);
  }
  decrypt(a,b){
    if(a.value)
    b.innerText = atob(a.value);
  }
  copyFun(result){
    this.clipboard.copy(result.innerText);
  }
  openSnackBar(){
    this._snackBar.open('Copied Successfully...!','Close',{
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

}
