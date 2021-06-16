import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Rendezvous } from '../../model/rendezvous.model';
import { Agent } from '../../model/agent.model';


@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.component.html',
  styleUrls: ['./rendezvous.component.scss']
})
export class RendezvousComponent implements OnInit {
 ngOnInit(): void {
   throw new Error('Method not implemented.');
 }
 agents: Agent[]=[
  { id: 1 ,name: 'Atlas'},
  { id: 2 ,name: 'zrikem'},
  { id: 3 ,name: 'Bouzid'},
 ];

 
 /* form: FormGroup;
  rendezvous: Rendezvous;
  

/*ngOnInit() {
  this.form = new FormGroup({
    objet: new FormControl('', Validators.required),
    date1: new FormControl('', Validators.required),
    date2: new FormControl('', Validators.required),
  });

  
}*/
/*onSubmit() {
    this.rendezvous = this.rendezvousForm.value;
    
  }
/*openDialog(): void {
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
}*/
  

}
