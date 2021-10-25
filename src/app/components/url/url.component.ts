import { Component, OnInit } from '@angular/core';

import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.scss']
})
export class UrlComponent implements OnInit {

  constructor(private clipboard: Clipboard, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  encrypt(a,b){
    if(a.value)
    b.innerText = encodeURIComponent(a.value);
  }
  decrypt(a,b){
    if(a.value)
    b.innerText = decodeURIComponent(a.value);
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
