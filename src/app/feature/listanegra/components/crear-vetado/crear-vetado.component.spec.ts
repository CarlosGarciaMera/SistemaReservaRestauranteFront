import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs/internal/observable/of';
import { ListanegraService } from '../../shared/service/listanegra.service';

import { CrearVetadoComponent } from './crear-vetado.component';

describe('CrearVetadoComponent', () => {
  let component: CrearVetadoComponent;
  let fixture: ComponentFixture<CrearVetadoComponent>;
  let servicio: ListanegraService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearVetadoComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule, FormsModule],
      providers: [ListanegraService, HttpService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearVetadoComponent);
    component = fixture.componentInstance;
    servicio = TestBed.inject(ListanegraService);
    spyOn(servicio, 'guardar').and.returnValue(
      of(1)
    );
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.formularioVetado.valid).toBeFalsy();
  });

  it('formulario es valido', () => {
    component.formularioVetado.controls.idCliente.setValue('1');
    component.formularioVetado.controls.nombreCliente.setValue('Vetado 1');
    expect(component.formularioVetado.valid).toBeTruthy();
  });

  it('Crear Vetado', () => {
    component.formularioVetado.controls.idCliente.setValue('1');
    component.formularioVetado.controls.nombreCliente.setValue('Vetado 1');
    component.crear();
  });
});
