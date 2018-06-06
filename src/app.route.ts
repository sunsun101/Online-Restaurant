import {Routes} from '@angular/router';
import {BodyComponent} from './app/body/body.component';
import {SignupComponent} from './app/signup/signup.component';
import {LoginComponent} from './app/login/login.component';


export const routes: Routes = [
    
    {path:'',component:LoginComponent},
    {path:'home',component:BodyComponent},
    {path:'signup',component:SignupComponent}
   
    
]

