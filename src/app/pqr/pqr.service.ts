import { Injectable } from '@angular/core';
import { PQR } from './pqr';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PqrService {

  listaPQR: Array<PQR>;
  private url = 'http://192.168.2.215:8080/centrodeportivo/webresources/co.edu.centrodeportivo.entidades.pqr';

  constructor(private http: HttpClient) { }

  cargarPQRs() {
    this.http.get(this.url).subscribe(data => {
      this.listaPQR = data as Array<PQR>;
    });
  }

  crearPQR(pqr: PQR) {
    const body = {nombre: pqr.nombre, tipo: pqr.tipo, correo: pqr.correo, descripcion: pqr.texto};

    this.http.post(this.url, body)
    .subscribe(data => {
      alert('PQR Creada Con Exito!');
      this.cargarPQRs();
    });
  }

}
