import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';
import { ProductoService } from './producto.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [IndexComponent, CrearComponent, ListarComponent],
  providers: [ProductoService]
})
export class ProductoModule { }
