import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { CommonModule } from '@angular/common';

@NgModule({
    // declarations => Que cosas contienen este modulo
    // es decir, nuestros componentes
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // que cosas quieron que sean visibles fuera de este modulo
    exports: [
        ListadoComponent
    ],
    // aqui van modulos
    imports: [
        // 
        CommonModule
    ]
})
export class HeroesModule {

}