import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Rendezvous } from '../../model/rendezvous.model';
import { MatTableDataSource } from '@angular/material/table';
import { AppointmentService } from '../../service/appointment.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.component.html',
  styleUrls: ['./rendezvous.component.scss']
})
export class RendezvousComponent implements OnInit {

  rendezvousForm: FormGroup;
  rendezvous: Rendezvous;
  Rendezvous: Rendezvous[];
 constructor(
  private rendezvousService: AppointmentService,
  private router: Router,
  public dialog: MatDialog,
) {}

ngOnInit() {
  this.rendezvousForm = new FormGroup({
    objet: new FormControl('', Validators.required),
    date1: new FormControl('', Validators.required),
    date2: new FormControl('', Validators.required),
    commentaire:new FormControl('', Validators.required),
  });

  
}
get date1() {
  return this.rendezvousForm.get('date1');
}
get date2() {
  return this.rendezvousForm.get('date2');
}
get objet() {
  return this.rendezvousForm.get('objet');
}
get commentaire() {
  return this.rendezvousForm.get('commentaire');
}


 onSubmit() {
   
  
    this.rendezvous = this.rendezvousForm.value;
    console.log(this.rendezvous);
    this.rendezvousService
      .save(this.rendezvous);
  }

  reset() {
    this.rendezvousForm.reset();
  }
openDialog(): void {
  console.log('bonjour');
  const dialogRef = this.dialog.open(RendezvousComponent, {
    width: '350px',
    data: {
      message: 'Etes  vous sur de continuer ?',
    },
  });
  dialogRef.afterClosed().subscribe((result) => {
    if (result) {
      this.onSubmit();
    }
  });
}
  

}
