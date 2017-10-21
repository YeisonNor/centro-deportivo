import { Injectable } from '@angular/core';
import { Reserva } from './reserva/reserva';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServiceReservaService {

  reservaLista: Array<Reserva>;
  private url = 'http://192.168.2.215:8080/centrodeportivo/webresources/co.edu.centrodeportivo.entidades.reserva';

  constructor(private http: HttpClient) { }

  cargarReservas() {
    this.http.get(this.url).subscribe(data => {
      this.reservaLista = data as Array<Reserva>;
    });
  }

  crearReserva(reserva: Reserva) {
    const body = {fecha: reserva.fecha, hora: reserva.hora, duracion: reserva.tiempo, nombreResponsable: reserva.nombreResponsable,
                telefonoResponsable: reserva.telefonoResponsable, identificacionResponsable: reserva.identificacionResponsable,
                cancha: reserva.cancha, valor: reserva.valor};

    this.http.post(this.url, body)
    .subscribe(data => {
      alert('Reserva Creada');
      this.cargarReservas();
    });
  }

}
