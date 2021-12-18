import { Component, OnInit } from '@angular/core';
import { CryptoService } from 'src/app/services/crypto.service';
import { Clipboard } from '@angular/cdk/clipboard';
import {MatSnackBar,MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';

@Component({
  selector: 'app-cryptojs',
  templateUrl: './cryptojs.component.html',
  styleUrls: ['./cryptojs.component.scss']
})
export class CryptojsComponent implements OnInit {
  default = "Private Key";
  defaultError = "Private Key must be greater than 8 characters";
  constructor(private cryptojs: CryptoService,
    private clipboard:Clipboard,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  encrypt(a,b,c){
    if(a.value && b.value)
    c.innerText = this.cryptojs.set(a.value, b.value);
  }
  decrypt(a,b,c){
    if(a.value && b.value)
    c.innerText = this.cryptojs.get(a.value, b.value);
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
  lenCheck(k,event){
    if(event.target.value.length>=8){
      k.innerText = this.default;
      k.style = "";
    }
    else{
    k.innerText = this.defaultError;
    k.style = "color:red";
    }
  }
  
}
