import { NgModule } from '@angular/core';
import {RouterModule , Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import {BodyComponent} from '../app/body/body.component';
import {SignupComponent} from '../app/signup/signup.component';
import {LoginComponent} from '../app/login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SearchdisplayComponent } from './searchdisplay/searchdisplay.component';

const routes: Routes = [
    
  {path:'',component:LoginComponent},
  {path:'home',component:BodyComponent},
  {path:'signup',component:SignupComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'search_display',component:SearchdisplayComponent}
 
  
]


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})

export class AppRoutingModule { }
