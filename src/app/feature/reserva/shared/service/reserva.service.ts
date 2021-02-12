import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Reserva } from '../model/reserva';

@Injectable()
export class ReservaService {

  constructor(protected http: HttpService) { }

  public listar() {
    return this.http.doGet<Reserva[]>(`${environment.endpoint}/reservas`, this.http.optsName('consultar mesas'));
  }

  public guardar(reserva: Reserva) {
    return this.http.doPost<Reserva, number>(`${environment.endpoint}/reservas`, reserva);
  }

  public eliminar(id: string) {
    return this.http.doDelete<void>(`${environment.endpoint}/reservas/${id}`, this.http.optsName('eliminar mesa'));
  }

}
