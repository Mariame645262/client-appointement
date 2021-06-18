import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rendezvous } from '../model/rendezvous.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private clientUrl:string;
  private rendezvousUrl:string;
  constructor(private http: HttpClient) { 
    this.clientUrl = 'http://localhost:8081/client';
    this.rendezvousUrl = 'http://localhost:8081/rendezvous';
  }
  public save(rendezvous: Rendezvous) {
    return this.http.post<Rendezvous>(this.rendezvousUrl , rendezvous);
  }

  
}
