import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaNegra } from '../../shared/model/listanegra';
import { ListanegraService } from '../../shared/service/listanegra.service';

@Component({
  selector: 'app-listar-vetados',
  templateUrl: './listar-vetados.component.html',
  styleUrls: ['./listar-vetados.component.css']
})
export class ListarVetadosComponent implements OnInit {

  public vetados: Observable<ListaNegra[]>;

  constructor(protected servicio: ListanegraService) { }

  ngOnInit(): void {
    this.vetados = this.servicio.listar();
  }

  eliminar(id: string): void {
    this.servicio.eliminar(id) .subscribe(
      _ => {
        this.ngOnInit();
    },
      error => console.log(JSON.stringify(error))
    );
  }
}
