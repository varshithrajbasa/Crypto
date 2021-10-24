import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Crypto';
  routes=[
    {link:'/crypto_js',name:'Crypto JS'},
    {link:'/base64',name:'Base 64'},
    {link:'/about',name:'About'}
  ]
}
