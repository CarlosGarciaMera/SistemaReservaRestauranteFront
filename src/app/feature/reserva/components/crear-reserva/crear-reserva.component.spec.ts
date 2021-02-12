import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs/internal/observable/of';
import { ReservaService } from '../../shared/service/reserva.service';

import { CrearReservaComponent } from './crear-reserva.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CrearReservaComponent', () => {
  let component: CrearReservaComponent;
  let fixture: ComponentFixture<CrearReservaComponent>;
  let servicio: ReservaService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearReservaComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule, FormsModule],
      providers: [ReservaService, HttpService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearReservaComponent);
    component = fixture.componentInstance;
    servicio = TestBed.inject(ReservaService);
    spyOn(servicio, 'guardar').and.returnValue(
      of(1)
    );
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.formularioReserva.valid).toBeFalsy();
  });

  it('formulario es valido', () => {
    component.formularioReserva.controls.idCliente.setValue('1');
    component.formularioReserva.controls.nombreCliente.setValue('Cliente 1');
    component.formularioReserva.controls.cantidadComensales.setValue(4);
    component.formularioReserva.controls.fecha.setValue('2021-03-02 10:00:00');
    expect(component.formularioReserva.valid).toBeTruthy();
  });

  it('Crear Reserva', () => {
    component.formularioReserva.controls.idCliente.setValue('1');
    component.formularioReserva.controls.nombreCliente.setValue('Cliente 1');
    component.formularioReserva.controls.cantidadComensales.setValue(4);
    component.formularioReserva.controls.fecha.setValue('2021-03-02 10:00:00');
    component.reservar();
  });
});
