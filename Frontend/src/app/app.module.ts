import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //------
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HostsComponent } from './hosts/hosts.component';
import { FormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';
import { SnglepageComponent } from './snglepage/snglepage.component';
import { PropertyComponent } from './property/property.component';
import { BookingComponent } from './booking/booking.component';
import { GuestComponent } from './guest/guest.component';
import { HostdetailsComponent } from './hostdetails/hostdetails.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, HostsComponent, LandingComponent, FooterComponent, SnglepageComponent, PropertyComponent, BookingComponent, GuestComponent, HostdetailsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
