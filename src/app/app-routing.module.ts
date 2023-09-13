// import { Component, NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { ServiceComponent } from './pages/service/service.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PriceComponent } from './components/price/price.component';
import { Ms365Component } from './pages/ms365/ms365.component';

const routes: Routes = [
  {
    component: HeaderComponent,
    path: '',
  },

  {
    component: ServiceComponent,
    path: 'service',
  },
  {
    component: AboutComponent,
    path: 'about',
  },
  {
    component: ContactComponent,
    path: 'contact',
  },
  {
    component: PriceComponent,
    path: 'price',
  },
  {
    component: Ms365Component,
    path: 'ms365',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
