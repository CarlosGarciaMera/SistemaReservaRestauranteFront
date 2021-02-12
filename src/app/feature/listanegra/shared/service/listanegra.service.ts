import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { ListaNegra } from '../model/listanegra';

@Injectable()
export class ListanegraService {

  constructor(protected http: HttpService) {}

  public listar() {
      return this.http.doGet<ListaNegra[]>(`${environment.endpoint}/listanegra`, this.http.optsName('consultar vetados'));
  }

  public guardar(vetado: ListaNegra) {
      return this.http.doPost<ListaNegra, number>(`${environment.endpoint}/listanegra`, vetado);
  }

  public eliminar(id: string) {
      return this.http.doDelete<void>(`${environment.endpoint}/listanegra/${id}`, this.http.optsName('eliminar vetado'));
  }
}

