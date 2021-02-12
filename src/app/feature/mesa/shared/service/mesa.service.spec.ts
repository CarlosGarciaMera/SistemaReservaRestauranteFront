import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { Mesa } from '../model/mesa';

import { MesaService } from './mesa.service';

describe('MesaService', () => {
  let service: MesaService;
  let httpMock: HttpTestingController;
  const endPoint = `http://localhost:8081/reserva/mesas`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MesaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(MesaService);
  });

  it('should be created', () => {
    const servicioMesa: MesaService = TestBed.inject(MesaService);
    expect(servicioMesa).toBeTruthy();
  });

  it('deberia listar mesas', () => {
    const mesasMock = [
      new Mesa('1', 'mesa1', 8), new Mesa('2', 'mesa2', 8), new Mesa('3', 'mesa3', 8)
    ];
    service.listar().subscribe(mesas => {
      expect(mesas.length).toBe(3);
      expect(mesas).toEqual(mesasMock);
    });
    const req = httpMock.expectOne(endPoint);
    expect(req.request.method).toBe('GET');
    req.flush(mesasMock);
  });

  it('deberia crear una mesa', () => {
    const mesaMock = new Mesa('1', 'mesa 1', 8);
    service.guardar(mesaMock).subscribe((respuesta) => {
      expect(respuesta).toEqual(1);
    });
    const req = httpMock.expectOne(endPoint);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<number>({body: 1}));
  });

  it('deberia eliminar una mesa', () => {
    const idDelete = '1';
    service.eliminar(idDelete).subscribe((respuesta) => {
      expect(respuesta);
    });
    const req = httpMock.expectOne(`${endPoint}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<void>());
  });
});
