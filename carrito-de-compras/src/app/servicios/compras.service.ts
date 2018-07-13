import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  private _carrito=[];
  private _indice=0;
  private _estado=false;

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
    this._carrito.splice(indice);
  }

  public buscarJugadores(id:number, equipoIDFK:number){

    for (let i = 0; i < this._carrito.length; i++) {
      if(this._carrito[i].id==id && this._carrito[i].equipoIDFK==equipoIDFK){
        this._estado=true;
      }
    }
    return this._estado
  }


  public getIndice(){
    return this._indice;
  }

  public aumentarIndice(){
     this._indice=this._indice+1;
  }
}
