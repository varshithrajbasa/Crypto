import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit{
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  title = 'Crypto';
  routes=[
    {link:'/crypto_js',name:'Crypto JS'},
    {link:'/base64',name:'Base 64'},
    {link:'/url',name:'Url'},
    {link:'/about',name:'About'}
  ];

  constructor(private observer: BreakpointObserver){  
  }
  ngOnInit(){
  }
  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
}
