import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs/internal/observable/of';
import { MesaService } from '../../shared/service/mesa.service';

import { CrearMesaComponent } from './crear-mesa.component';

describe('CrearMesaComponent', () => {
  let component: CrearMesaComponent;
  let fixture: ComponentFixture<CrearMesaComponent>;
  let servicio: MesaService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearMesaComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule, FormsModule],
      providers: [MesaService, HttpService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMesaComponent);
    component = fixture.componentInstance;
    servicio = TestBed.inject(MesaService);
    spyOn(servicio, 'guardar').and.returnValue(
      of(1)
    );
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.formulario.valid).toBeFalsy();
  });

  it('formulario es valido', () => {
    component.formulario.controls.nombre.setValue('Mesa 1');
    component.formulario.controls.cantidadMaximaComensales.setValue(4);
    expect(component.formulario.valid).toBeTruthy();
  });

  it('Crear Mesa', () => {
    component.formulario.controls.nombre.setValue('Mesa 1');
    component.formulario.controls.cantidadMaximaComensales.setValue(4);
    component.crear();
  });

});
