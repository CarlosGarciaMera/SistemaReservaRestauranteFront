import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ReservaService } from '../../shared/service/reserva.service';

@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.css']
})
export class CrearReservaComponent implements OnInit {

  formularioReserva: FormGroup;
  constructor(protected servicio: ReservaService, private router: Router) {}

  ngOnInit(): void {
    this.construirFormulario();
  }

  reservar() {
    if (this.formularioReserva.valid) {
      this.servicio.guardar(this.formularioReserva.value)
      .subscribe(
        _ => {
          this.router.navigate(['reserva/listar']);
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

  private construirFormulario() {
    this.formularioReserva = new FormGroup({
      idCliente: new FormControl('', [Validators.required]),
      nombreCliente: new FormControl('', [Validators.required]),
      cantidadComensales: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
    });
  }

}
