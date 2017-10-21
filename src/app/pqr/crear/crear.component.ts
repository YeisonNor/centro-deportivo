import { Component, OnInit } from '@angular/core';

import { PQR } from '../pqr';
import { PqrService } from '../pqr.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  public pqr: PQR;

  constructor(private pqrDataService: PqrService) {
    this.pqr = new PQR('', 'Pregunta', '', '');
  }

  ngOnInit() {
  }

  nuevaPQR() {
    this.pqr = new PQR('', 'Pregunta', '', '');
  }

  crearPQR() {
    this.pqrDataService.crearPQR(this.pqr);
    this.pqr = new PQR('', 'Pregunta', '', '');
  }


}
