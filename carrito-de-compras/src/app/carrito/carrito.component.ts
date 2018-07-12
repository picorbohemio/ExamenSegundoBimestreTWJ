import { Component, OnInit } from '@angular/core';
import {ComprasService} from "../servicios/compras.service";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  compras;
  constructor(private _compras: ComprasService) { }


  ngOnInit() {
    this.cargarCompras();
  }

  cargarCompras(){
    this.compras=this._compras.getJugadores();
  }

}
