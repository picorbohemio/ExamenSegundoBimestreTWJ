import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private _usuario=[];

  constructor() {
    this._usuario = [
      {
        id:10,
        nickname: 'ldurider',
        nombre: 'Luis Unapanta',
        correoElectronico: 'ldurider@gmail.com',
      }];
  }

  public getUsuario(){
    return this._usuario;
  }
}
