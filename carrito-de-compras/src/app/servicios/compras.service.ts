import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  private _carrito=[];
  private _indice=0;
  private _estado:boolean;

  tamanio$ = new BehaviorSubject(this._carrito.length);

  constructor() {}

  public getJugadores(){
    return this._carrito;
  }

  public ingresarJugadores(jugador){
    this._carrito.push(
      {
        'id': jugador[0].id,
        'equipoIDFK': jugador[0].equipoIDFK.id,
        'nombre': jugador[0].nombre,
        'apellido': jugador[0].apellido,
        'fechaIngreso': jugador[0].fechaIngreso,
        'numeroCamiseta': jugador[0].numeroCamiseta,
        'goles': jugador[0].goles,
        'valor': jugador[0].valor,
        'urlImagen' : jugador[0].urlImagen
      }
    );
  }

  public borrarJugadores(indice){
    this._carrito.splice(indice,1);
  }

  public buscarJugadores(id:number, equipoIDFK:number){

    if(this._carrito.length==0){
      this._estado=false;
    }else{
console.log('tam',this._carrito.length)

    for (var i = 0; i < this._carrito.length; i++) {
      console.log('carrito',this._carrito[i])
      if(this._carrito[i].id==id && this._carrito[i].equipoIDFK==equipoIDFK){
        this._estado=true;
        break;
      }else{
        this._estado=false;
      }
    }

    }
    return this._estado;
  }

  public getLength() {
    return this.tamanio$;
  }

  public actualizarTamanio(){
    this.tamanio$.next(this._carrito.length);
  }

}
