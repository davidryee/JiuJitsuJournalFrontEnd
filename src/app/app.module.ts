import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { OpponentsListComponent } from './opponents/opponents-list/opponents-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatchesScreenComponent } from './matches-screen/matches-screen.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { authInterceptorProviders } from './helpers/auth.interceptor';
import { OpponentDetailsComponent } from './opponents/opponent-details/opponent-details.component';
import { ModalComponent } from './modal/modal.component';
import { OpponentNewComponent } from './opponents/opponent-new/opponent-new.component';

@NgModule({
  declarations: [
    AppComponent,
    OpponentsListComponent,
    OpponentDetailsComponent,
    OpponentNewComponent,
    HomeScreenComponent,
    SideNavComponent,
    MatchesScreenComponent,
    LoginComponent,
    RegisterComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
