import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

// Con este decorador hemos definido un SERVICIO
@Injectable()
export class DbzService {

    // Para que en ninguna otra parte de codigo sea manipulada
    // _<nombre> => guion bajo
    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 7500
        }
    ];

    // Tener cuidado porque JS manda (envia) los objetos por referencia *
    get personajes() {
        // ... => con esto romper la referncia que tiene con los personajes
        // ... => OPERADOR SPREAD, es decir, separa los elementos independientes que tiene este elemento y crea uno nuevo
        // NO ES OBLIGATORIO de JS es solo BUENAS PRACTICAS
        return [...this._personajes];
    }

    constructor() {
        console.log('Servicio inicializado')
    }

    // Debajo de los CONSTRUCTORES vienen los METODOS

    // Metodo para añadir personajes
    agregaPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }

}
