import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpponentsScreenComponent } from './opponents-screen/opponents-screen.component';
import {HomeScreenComponent} from './home-screen/home-screen.component';
const routes: Routes = [
  {path: 'opponents', component: OpponentsScreenComponent},
  {path: '', component: HomeScreenComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }