import { Component, OnInit } from '@angular/core';
import { ServiceReservaService } from '../../service-reserva.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(private reservaDataService: ServiceReservaService) { }

  ngOnInit() {
    this.reservaDataService.cargarReservas();
  }

}
