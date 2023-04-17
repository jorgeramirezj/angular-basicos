import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {

    nombre: string = 'Iroman';
    edad: number = 45;

    // Getters
    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        console.log('hey...');
        this.edad = 30;
    }

    resetForm() : void{
        this.nombre = 'Ironman';
        this.edad = 45;
        // modificar HTML
        //document.querySelector('h1')!.innerHTML = '<h1>Desde Angular</h1>';
        document.querySelectorAll('h1').forEach(e => {
            e.innerHTML = '<h1>Desde Angular</h1>';
        });
    }

}
