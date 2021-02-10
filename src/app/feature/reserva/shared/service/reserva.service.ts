import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Reserva } from '../model/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(protected http: HttpService) { }
  public listar() {
    return this.http.doGet<Reserva[]>(`http://localhost:8081/reserva/reservas`, this.http.optsName('consultar mesas'));
  }

  public guardar(reserva: Reserva) {
    return this.http.doPost<Reserva, number>(`http://localhost:8081/reserva/reservas`, reserva);
  }

  public eliminar(id: string) {
    return this.http.doDelete<void>(`http://localhost:8081/reserva/reservas/${id}`,
                                                 this.http.optsName('eliminar mesa'));
  }

}
