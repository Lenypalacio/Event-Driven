import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './page/home/home.component';

import { GallaryComponent } from './page/gallary/gallary.component';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'gallery', component: GallaryComponent},

  { path: 'profile', component: PersonalComponent},
 
  { path: 'contact', component: ContactComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
