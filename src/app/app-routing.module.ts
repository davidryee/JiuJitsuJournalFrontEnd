import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpponentsScreenComponent } from './opponents-screen/opponents-screen.component';
import {HomeScreenComponent} from './home-screen/home-screen.component';
import { MatchesScreenComponent } from './matches-screen/matches-screen.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'opponents', component: OpponentsScreenComponent},
  {path: 'matches', component: MatchesScreenComponent},
  {path: '', component: HomeScreenComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }