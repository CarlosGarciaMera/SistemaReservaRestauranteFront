import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { ListaNegra } from '../model/listanegra';

@Injectable({
  providedIn: 'root'
})
export class ListanegraService {
  
  constructor(protected http: HttpService) {}

    public listar() {
      return this.http.doGet<ListaNegra[]>(`http://localhost:8081/reserva/listanegra`, this.http.optsName('consultar vetados'));
    }
  
    public guardar(vetado: ListaNegra) {
      return this.http.doPost<ListaNegra, number>(`http://localhost:8081/reserva/listanegra`, vetado);
    }
  
    public eliminar(id: string) {
      return this.http.doDelete<void>(`http://localhost:8081/reserva/listanegra/${id}`,
                                                   this.http.optsName('eliminar vetado'));
    }
}

