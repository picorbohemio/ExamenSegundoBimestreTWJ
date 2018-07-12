import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  private _carrito;

  constructor() {
    this._carrito = [
      {
        //id:10,
        //equipoIDFK: 10,
        nombre: 'Charly',
        apellido: 'Charly',
        //fechaIngreso: 'Charly',
        //numeroCamiseta: 10,
        //goles: 2,
        //urlImagen:'Charly',

      }];
  }

  public getJugadores(){
    return this._carrito;
  }

  public ingresarJugadores(jugador){
    this._carrito.push(
      {
        'id': jugador[0].id,
        'equipoIDFK': jugador[0].equipoIDFK,
        'nombre': jugador[0].nombre,
        'apellido': jugador[0].apellido,
        'fechaIngreso': jugador[0].fechaIngreso,
        'numeroCamiseta': jugador[0].numeroCamiseta,
        'goles': jugador[0].goles,
        'urlImagen' : jugador[0].urlImagen

      }
    );
  }
}
