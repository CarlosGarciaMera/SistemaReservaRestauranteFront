import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Mesa } from '../model/mesa';

@Injectable()
export class MesaService {

  constructor(protected http: HttpService) {}

    public listar() {
      return this.http.doGet<Mesa[]>(`${environment.endpoint}/mesas`, this.http.optsName('consultar mesas'));
    }

    public guardar(mesa: Mesa) {
      return this.http.doPost<Mesa, number>(`${environment.endpoint}/mesas`, mesa);
    }

    public eliminar(id: string) {
      return this.http.doDelete<void>(`${environment.endpoint}/mesas/${id}`, this.http.optsName('eliminar mesa'));
    }
}
