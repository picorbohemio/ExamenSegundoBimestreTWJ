import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ModuleWithProviders} from "@angular/core";
import {EquipoComponent} from "./equipo/equipo.component";
import {JugadorComponent} from "./jugador/jugador.component";
import {CarritoComponent} from "./carrito/carrito.component";

export const routes:Routes=[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'equipo/:idequipo',component:EquipoComponent},
  {path:'equipo/:idequipo/:jugador/:idjugador',component:JugadorComponent},
  {path:'carrito',component:CarritoComponent},

];
export const routing:ModuleWithProviders=RouterModule.forRoot(routes);
