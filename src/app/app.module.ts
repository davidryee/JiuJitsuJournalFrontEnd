import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OpponentsScreenComponent } from './opponents-screen/opponents-screen.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatchesScreenComponent } from './matches-screen/matches-screen.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { authInterceptorProviders } from './helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    OpponentsScreenComponent,
    HomeScreenComponent,
    SideNavComponent,
    MatchesScreenComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
