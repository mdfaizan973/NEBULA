import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HostsComponent } from './hosts/hosts.component';
import { LandingComponent } from './landing/landing.component';
import { SnglepageComponent } from './snglepage/snglepage.component';
import { PropertyComponent } from './property/property.component';
const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'hosts', component: HostsComponent },
  { path: 'property', component: PropertyComponent },
  { path: 'home/:id', component: SnglepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
