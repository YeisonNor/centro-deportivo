import { Component, OnInit } from '@angular/core';

import { Reserva } from '../reserva';
import { ServiceReservaService } from '../../service-reserva.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  public reserva: Reserva;
  valoresCancha = ['', '50000', '60000', '70000', '80000'];

  constructor(private reservaDataService: ServiceReservaService) {
    this.reserva = new Reserva('', '', '1', '', '', '', '', 0);
  }

  ngOnInit() {
  }

  nuevaReserva() {
    this.reserva = new Reserva('', '', '1', '', '', '', '', 0);
  }

  crearReserva() {
    this.reservaDataService.crearReserva(this.reserva);
    this.reserva = new Reserva('', '', '1', '', '', '', '', 0);
  }

  calcularValor() {
    if (this.reserva.tiempo !== '' && this.reserva.cancha !== '') {

      if (this.valoresCancha[this.reserva.cancha] !== '') {
        this.reserva.valor = +this.valoresCancha[this.reserva.cancha] * +this.reserva.tiempo;
      } else {
        this.reserva.valor = 50000 * +this.reserva.tiempo;
      }
    }
  }

}
