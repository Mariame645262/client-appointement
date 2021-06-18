import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { appointmentRoutingModule } from './appointment-routing.module';
import { RendezvousComponent } from './components/rendezvous/rendezvous.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [RendezvousComponent],
  imports: [
    CommonModule,
    appointmentRoutingModule,
    SharedModule],
})
export class appointmentModule { }
