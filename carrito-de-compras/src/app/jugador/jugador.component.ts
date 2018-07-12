import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {

  jugador;
  _parametros:any;

  nombre:string;

  constructor(private _httpClient: HttpClient, private _activetedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.cargarJugador();

  }

  cargarJugador(){
    this._activetedRoute.params.subscribe(parametros=>{
      this._parametros=parametros;
      this._httpClient.get('http://localhost:1337/jugador?id='+this._parametros.idjugador)
        .subscribe(
          (res)=>{
            this.jugador=res;
            console.log(this.jugador);
          },
          (err)=>{
            console.log(err);
          }
        )


    });



  }

}
