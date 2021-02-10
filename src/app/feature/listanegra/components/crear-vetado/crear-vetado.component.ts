import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListanegraService } from '../../shared/service/listanegra.service';

@Component({
  selector: 'app-crear-vetado',
  templateUrl: './crear-vetado.component.html',
  styleUrls: ['./crear-vetado.component.css']
})
export class CrearVetadoComponent implements OnInit {

  formularioVetado: FormGroup;
  constructor(protected servicio: ListanegraService, private router:Router) { }

  ngOnInit(): void {
    this.construirFormulario();
  }


  crear() {
    this.servicio.guardar(this.formularioVetado.value)
    .subscribe(
      _ => {
        this.router.navigate(['listanegra/listar'])
        console.log("!Completed")
    },
      error => console.log(JSON.stringify(error))
    );  
  }

  private construirFormulario() {
    this.formularioVetado = new FormGroup({
      idCliente: new FormControl('', [Validators.required]),
      nombreCliente: new FormControl('', [Validators.required])
    });
  }

}
