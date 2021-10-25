import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './page/home/home.component';

import { PersonalComponent } from './page/personal/personal.component';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'profile', component: PersonalComponent},
 
  { path: 'contact', component: ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
