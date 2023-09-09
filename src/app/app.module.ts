import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { NgIconsModule } from '@ng-icons/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { FooterComponent } from './footer/footer.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { CardComponent } from './card/card.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { CountupComponent } from './countup/countup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    NavbarComponent,
    AboutComponent,
    ServiceComponent,
    FooterComponent,
    WorksComponent,
    ContactComponent,
    CardComponent,
    Navbar2Component,
    CountupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({}),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
