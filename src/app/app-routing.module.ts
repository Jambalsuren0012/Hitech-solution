import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';

import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
