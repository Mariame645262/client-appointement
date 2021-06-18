import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RendezvousComponent} from './components/rendezvous/rendezvous.component' ;
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class appointmentRoutingModule { }
