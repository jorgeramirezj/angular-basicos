import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../_services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 14000
  }

  // Vamos a enviar esta informacion desde el componente HIJO AL PADRE
  // @Output => EMITIR EVENTOS
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  /*agregar(event: any) {
    // preventDefault() => prevee el comportamiento que tiene un formulaio
    event.preventDefault();
    console.log(event);
  }*/

  constructor(
    private dbzService: DbzService
  ) {}

  cambiarNombre(event: any){
    console.log(event.target.value);
  }
  
  agregar() {
    if(this.nuevo.nombre.trim().length === 0) { return; }
    
    console.log(this.nuevo);
    // Aqui estamos emitiendo al componente PADRE
    //this.onNuevoPersonaje.emit(this.nuevo);

    // Agregamos desde nuestro servicio
    this.dbzService.agregaPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }

    console.log('Esta es una prueba');

  }


}
