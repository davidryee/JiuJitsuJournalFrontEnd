import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OpponentsScreenComponent } from './opponents-screen/opponents-screen.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    OpponentsScreenComponent,
    HomeScreenComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
