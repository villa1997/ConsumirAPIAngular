import { Component, OnInit } from '@angular/core';
import {ServicioService} from 'src/app/services/servicio.service';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent implements OnInit {

  title = 'demo131';
  users: any[] = [];

  constructor(
            protected service: ServicioService
  ) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.service.getUsers()
    .subscribe(
      (data) => { // Success
        this.users = data['results'];
        console.log(this.users);
      },
      (error) => {
        console.error(error);
      }
    );
    
  }

}
