import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {


  t:number=5;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.time()
  }
  time(){
    setTimeout(() => {
      this.t = this.t-1;
      this.t == 0?this.router.navigateByUrl('/'):this.time()
   }, 1000);

  }

}
