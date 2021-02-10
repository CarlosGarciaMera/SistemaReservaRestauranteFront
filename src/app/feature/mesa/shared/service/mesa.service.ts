import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { Mesa } from '../model/mesa';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  constructor(protected http: HttpService) {}

    public listar() {
      return this.http.doGet<Mesa[]>(`http://localhost:8081/reserva/mesas`, this.http.optsName('consultar mesas'));
    }
  
    public guardar(mesa: Mesa) {
      return this.http.doPost<Mesa, number>(`http://localhost:8081/reserva/mesas`, mesa);
    }
  
    public eliminar(id: string) {
      return this.http.doDelete<void>(`http://localhost:8081/reserva/mesas/${id}`,
                                                   this.http.optsName('eliminar mesa'));
    }
}
