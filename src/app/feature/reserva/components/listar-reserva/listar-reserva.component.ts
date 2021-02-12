import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from '../../shared/model/reserva';
import { ReservaService } from '../../shared/service/reserva.service';

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.css']
})
export class ListarReservaComponent implements OnInit {

  public reservas: Observable<Reserva[]>;

  constructor(protected servicio: ReservaService) { }

  ngOnInit(): void {
    this.reservas = this.servicio.listar();
  }

  cancelarReserva(id: string): void {
    this.servicio.eliminar(id) .subscribe(
      _ => {
        this.ngOnInit();
    },
      error => console.log(JSON.stringify(error))
    );
  }
}
