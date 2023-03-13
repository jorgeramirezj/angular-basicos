import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// Vamos a importar nuestro componente en este modulo
//import { ContadorComponent } from './contador/contador/contador.component';

import { HeroesModule } from './heroes/heroes.module';
// Tarea: Crear un modulo llamado ContadorModule
// hacer: declaraciones y exportaciones
// LISTO => OK Tarea
import { ContadorModule } from './contador/contador.module';


// AQUI ESTAN LOS MODULOS DE LA APLICACIÓN
// @NgModule => Este decorador es mas especial
@NgModule({
  declarations: [
    AppComponent,
    //ContadorComponent
  ],
  imports: [
    BrowserModule,
    // Importamos nuestro modulo que contiene los componentes
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
