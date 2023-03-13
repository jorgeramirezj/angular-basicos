import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitan America'];

  heroeBorrado: string = '';

  // Se ejecuta muchos antes del ngOnInit
  constructor() {
    console.log('constructor');
  }

  // Inicializar cosas, como los servicios
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  borrarHeroe(): void {
    console.log('borrando...');
    // Borra todos los elementos del arreglo de manera practica
    //this.heroes = [];
    // Remueve el primer elemento del arreglo
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
  }

}
