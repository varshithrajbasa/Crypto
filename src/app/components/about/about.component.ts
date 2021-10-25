import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private router:Router,
    private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }
  navigate(link){
    this.router.navigateByUrl(link);
  }
  share(){
    try{
    navigator.share({
      title: 'Crypto App(Encrypt & Decrypt)',
      url: 'https://varshithrajbasa.github.io/CryptoApp'
    }).then(() => {
      this._snackBar.open('Thanks for Sharing...! 😊','Close',{
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
    })
    .catch(()=>{
      this._snackBar.open('Failed to Share 😢','Close',{
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
    });}
    catch(err){
      this._snackBar.open('Failed to Share 😢','Close',{
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
    }
  }
}
