
import {NgModule,CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './header/home/home.component'
import {AboutComponent} from './header/about/about.component'

const appRoutes: Routes = [
  { path:'home' ,component:HomeComponent },
  { path:'about' ,component:AboutComponent },
  { path: '',

    redirectTo: '/home',
    pathMatch: 'full'
  },
  ];


@NgModule({
  declarations: [HomeComponent, AboutComponent],
  imports: [
    RouterModule.forRoot(appRoutes)],
  exports:[RouterModule],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppRoutingModule { }

