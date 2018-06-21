import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BodyHeaderComponent } from './body-header/body-header.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AboutUsComponent } from './about-us/about-us.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SearchdisplayComponent } from './searchdisplay/searchdisplay.component';
import {CheckGuard} from './router-guard/check-guard';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    LoginComponent,
    SignupComponent,
    BodyHeaderComponent,
    AboutUsComponent,
    SearchdisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, {dataEncapsulation: false})
  ],
  providers: [CheckGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
