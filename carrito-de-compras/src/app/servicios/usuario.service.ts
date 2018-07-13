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
        imagen: 'http://www.diazcortez.com.ar/2017/1_cuat/jt27/tp/img/usuario.png',
        direccion: 'Sector La Gasca'
      }];
  }

  public getUsuario(){
    return this._usuario;
  }
}
