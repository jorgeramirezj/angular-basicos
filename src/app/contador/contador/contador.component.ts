import {Component} from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{ titulo }}</h1>
    <h3>La base es: <strong>{{base}}</strong></h3>

    <button (click)="acumular(base)"> + {{base}} </button>

    <span>{{numero}}</span>

    <button (click)="acumular(-base)"> - {{base}} </button>
    <!--<button (click)="numero = numero - 1;"> - 1 </button>-->
    `
})
export class ContadorComponent {
    
    public titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;

    // Una mejora funcional con respecto a crear dos metodos: SUMAR, RESTAR
    // Solo hemos creado un metodo que realiza ambas operaciones
    // y depende del valor del argumento
    acumular(valor: number){
        this.numero += valor;
    }

    /*sumar(){
        this.numero += 1;
    }
    restar(){
        this.numero -= 1;
    }*/


}
