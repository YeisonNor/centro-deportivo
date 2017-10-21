import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';
import { IndexComponent } from './index/index.component';
import { ServiceReservaService } from '../service-reserva.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [CrearComponent, ListarComponent, IndexComponent],
  providers: [ServiceReservaService]
})
export class ReservaModule { }
