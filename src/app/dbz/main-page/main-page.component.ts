import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../_services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  /*agregaNuevoPersona(argumento: Personaje){
    // debugger => funciona como un BREAKPOINT y se detiene cada que llega aqui
    // nos ayuda a depurar nuestro codigo
    //debugger;
    console.log('Main Page component');
    this.personajes.push(argumento);
  }*/

  // Definir propiedades de manera corta
  // Esto es INYECCICóN DE DEPENDENCIAS
  constructor(
    //private dbzService: DbzService
  ) {}

}
