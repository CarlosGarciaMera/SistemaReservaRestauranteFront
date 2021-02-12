import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Mesa } from '../../shared/model/mesa';
import { MesaService } from '../../shared/service/mesa.service';

@Component({
  selector: 'app-listar-mesa',
  templateUrl: './listar-mesa.component.html',
  styleUrls: ['./listar-mesa.component.css']
})
export class ListarMesaComponent implements OnInit {

  public listaMesas: Observable<Mesa[]>;

  constructor(protected servicio: MesaService) { }

  ngOnInit(): void {
    this.listaMesas = this.servicio.listar();
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
