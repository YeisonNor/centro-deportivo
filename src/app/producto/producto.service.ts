import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductoService {

  listaProductos: Array<Producto>;
  private url = 'http://192.168.2.215:8080/centrodeportivo/webresources/co.edu.centrodeportivo.entidades.productos';

  constructor(private http: HttpClient) { }

  cargarProductos() {
    this.http.get(this.url).subscribe(data => {
      this.listaProductos = data as Array<Producto>;
    });
  }

  crearProducto(producto: Producto) {
    const body = {nombreProducto: producto.nombreProducto, categoria: producto.categoria, valor: producto.valor, foto: producto.foto};

    this.http.post(this.url, body)
    .subscribe(data => {
      alert('Producto Creado Con Exito!');
      this.cargarProductos();
    });
  }

}
