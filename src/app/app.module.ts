import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReservaModule } from './reserva/reserva.module';
import { InformacionModule } from './informacion/informacion.module';
import { InicioModule } from './inicio/inicio.module';
import { PqrModule } from './pqr/pqr.module';
import { ProductoModule } from './producto/producto.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { OptionComponent } from './option/option.component';

import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './reserva/index/index.component';
import { HomeComponent } from './informacion/home/home.component';
import { IndexComponent as IndexComponentInicio } from './inicio/index/index.component';
import { IndexComponent as IndexComponentPQR } from './pqr/index/index.component';
import { IndexComponent as IndexComponentProducto } from './producto/index/index.component';

const appRoutes: Routes = [
  { path: 'reserva/index', component: IndexComponent },
  { path: 'informacion/home', component: HomeComponent },
  { path: 'inicio/index', component: IndexComponentInicio },
  { path: 'pqr/index', component: IndexComponentPQR },
  { path: 'producto/index', component: IndexComponentProducto }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OptionComponent
  ],
  imports: [
    BrowserModule,
    ReservaModule,
    InformacionModule,
    InicioModule,
    PqrModule,
    ProductoModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
