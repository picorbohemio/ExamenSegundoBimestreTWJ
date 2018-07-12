import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  jugadores;
  equipo;
  _parametros:any;

  constructor(private _httpClient: HttpClient, private _activetedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.cargarEquipo();
    this.cargarJugadores();
  }

  cargarJugadores(){
    this._activetedRoute.params.subscribe(parametros=>{
      this._parametros=parametros;
      this._httpClient.get('http://localhost:1337/jugador?equipoIDFK='+this._parametros.idequipo)
        .subscribe(
          (res)=>{
            this.jugadores=res;
            console.log(this.jugadores);
          },
          (err)=>{
            console.log(err);
          }
        )
    });
  }

  cargarEquipo(){
    this._activetedRoute.params.subscribe(parametros=>{
      this._parametros=parametros;
      this._httpClient.get('http://localhost:1337/equipo?id='+this._parametros.idequipo)
        .subscribe(
          (res)=>{
            this.equipo=res;
            console.log(this.jugadores);
          },
          (err)=>{
            console.log(err);
          }
        )
    });
  }

}
