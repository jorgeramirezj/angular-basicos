import { Component, Input } from '@angular/core';
import { DbzService } from '../_services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  // Para recibir datos de otros componentes, del PADRE
  // Lo hemos definido con nombre "data"
  //@Input('data') personajes: Personaje[] = [];
  get personajes(){
    return this.dbzService.personajes;
  }

  constructor(
    private dbzService: DbzService
  ) {}
  

}
