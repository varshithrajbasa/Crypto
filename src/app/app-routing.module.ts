import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { Base64Component } from './components/base64/base64.component';
import { CryptojsComponent } from './components/cryptojs/cryptojs.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  { path: 'crypto_js', component: CryptojsComponent },
  { path: 'base64', component: Base64Component },
  { path: 'about', component: AboutComponent },
  { path: '',   redirectTo: '/crypto_js', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
