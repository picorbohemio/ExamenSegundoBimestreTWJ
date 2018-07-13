import { Component, OnInit } from '@angular/core';
import {ComprasService} from "../servicios/compras.service";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  compras;
  total=0;
  constructor(private _compras: ComprasService) { }


  ngOnInit() {
    this.cargarCompras();
    this.calcularTotal();
  }

  cargarCompras(){
    this.compras=this._compras.getJugadores();
  }

  borrarCompras(indice){
    this._compras.borrarJugadores(indice);
    this.total=0;
    this.calcularTotal()
  }

  calcularTotal(){
    for(let i=0; i<this.compras.length;i++){
      this.total=this.total+this.compras[i].valor;
    }
  }

  finCompra(){
    alert('Compra con exito')
  }


}
