import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { NgIconsModule } from '@ng-icons/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { ServiceComponent } from './pages/service/service.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CardComponent } from './components/card/card.component';
import { CountupComponent } from './components/countup/countup.component';
import { PriceComponent } from './components/price/price.component';
import { CameraPageComponent } from './pages/camera-page/camera-page.component';
import { PartnersComponent } from './components/partners/partners.component';
import { Ms365Component } from './pages/ms365/ms365.component';
import { HelpbarComponent } from './components/helpbar/helpbar.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { CardflipComponent } from './cardflip/cardflip.component';
import { WhyweComponent } from './whywe/whywe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    NavbarComponent,
    AboutComponent,
    ServiceComponent,
    FooterComponent,
    ContactComponent,
    CardComponent,
    CountupComponent,
    PriceComponent,
    CameraPageComponent,
    PartnersComponent,
    Ms365Component,
    HelpbarComponent,
    Navbar2Component,
    CardflipComponent,
    WhyweComponent,
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
