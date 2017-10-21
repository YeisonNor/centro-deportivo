import { Component, OnInit } from '@angular/core';
import { PqrService } from '../pqr.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(private pqrDataService: PqrService) { }

    ngOnInit() {
      this.pqrDataService.cargarPQRs();
    }

}
