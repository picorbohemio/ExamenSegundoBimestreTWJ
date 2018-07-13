import { Component, OnInit } from '@angular/core';
import {ComprasService} from "../servicios/compras.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  indice:number;

  constructor(private _compras: ComprasService) {


  }

  ngOnInit() {
    this.indice=this._compras.getIndice();
    console.log(this.indice)  }


}
