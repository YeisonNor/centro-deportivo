import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(private productoDataService: ProductoService) { }

  ngOnInit() {
    this.productoDataService.cargarProductos();
  }

}
