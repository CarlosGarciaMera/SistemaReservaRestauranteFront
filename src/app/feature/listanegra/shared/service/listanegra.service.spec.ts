import { HttpResponse } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { ListaNegra } from '../model/listanegra';

import { ListanegraService } from './listanegra.service';

describe('ListanegraService', () => {
  let service: ListanegraService;
  let httpMock: HttpTestingController;
  const endPoint = `http://localhost:8081/reserva/listanegra`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ListanegraService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ListanegraService);
  });

  it('should be created', () => {
    const servicioListaNegra: ListanegraService = TestBed.inject(ListanegraService);
    expect(servicioListaNegra).toBeTruthy();
  });

  it('deberia listar VETADOS', () => {
    const vetadosMock = [
      new ListaNegra('1', '1', 'Vetado 1'), new ListaNegra('2', '2', 'Vetado 2')
    ];
    service.listar().subscribe(vetados => {
      expect(vetados.length).toBe(2);
      expect(vetados).toEqual(vetadosMock);
    });
    const req = httpMock.expectOne(endPoint);
    expect(req.request.method).toBe('GET');
    req.flush(vetadosMock);
  });

  it('deberia crear un vetado', () => {
    const vetadoMock = new ListaNegra('1', '1', 'Vetado 1');
    service.guardar(vetadoMock).subscribe((respuesta) => {
      expect(respuesta).toEqual(1);
    });
    const req = httpMock.expectOne(endPoint);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<number>({body: 1}));
  });

  it('deberia eliminar un vetado', () => {
    const idDelete = '1';
    service.eliminar(idDelete).subscribe((respuesta) => {
      expect(respuesta);
    });
    const req = httpMock.expectOne(`${endPoint}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<void>());
  });
});
