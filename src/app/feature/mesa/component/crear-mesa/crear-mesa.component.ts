import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MesaService } from '../../shared/service/mesa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-mesa',
  templateUrl: './crear-mesa.component.html',
  styleUrls: ['./crear-mesa.component.css']
})
export class CrearMesaComponent implements OnInit {
  formulario: FormGroup;
  constructor(protected servicio: MesaService, private router: Router) { }

  ngOnInit(): void {
    this.construirFormularioMesa();
  }


  crear() {
    if (this.formulario.valid) {
      this.servicio.guardar(this.formulario.value)
      .subscribe(
        _ => {
          this.router.navigate(['mesa/listar']);
      },
        error => {
          console.log(JSON.stringify(error));
          Swal.fire({
            icon : 'error',
            title : error.error.mensaje
          });
        }
      );
    }
  }

  private construirFormularioMesa() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      cantidadMaximaComensales: new FormControl('', [Validators.required])
    });
  }

}
