import { Component, OnInit } from '@angular/core';

import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  public producto: Producto;

    constructor(private productoDataService: ProductoService) {
      this.producto = new Producto('', 'Ropa', 0, '');
    }

    ngOnInit() {
    }

    nuevoProducto() {
      this.producto = new Producto('', 'Ropa', 0, '');
    }

    crearProducto() {
      this.productoDataService.crearProducto(this.producto);
      this.producto = new Producto('', 'Ropa', 0, '');
    }

    guardarRuta(event) {
      this.producto.foto = event.target.files[0]['name'];
    }

}
