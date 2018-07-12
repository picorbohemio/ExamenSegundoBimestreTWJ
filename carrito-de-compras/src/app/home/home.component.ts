import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clickEnBuscar: EventEmitter<object> = new EventEmitter();
  arrayEquipos;
  arrayJugadores;



  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {

    const observableEquipo$ = this._httpClient
      .get('http://localhost:1337/equipo');

    observableEquipo$
      .subscribe(
        results=>{
          console.log(results);
          this.arrayEquipos=results;
        },
        (error)=>{
          console.log('Error',error);
        },
        ()=>{
          console.log('COMPLETO!')
        }
      );

    const observableJugador$ = this._httpClient
      .get('http://localhost:1337/jugador');

    observableJugador$
      .subscribe(
        results=>{
          console.log(results);
          this.arrayJugadores=results;
        },
        (error)=>{
          console.log('Error',error);
        },
        ()=>{
          console.log('COMPLETO!')
        }
      );
  }



}
