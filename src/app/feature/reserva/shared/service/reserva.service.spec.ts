import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { Reserva } from '../model/reserva';

import { ReservaService } from './reserva.service';

describe('ReservaService', () => {
  let service: ReservaService;
  let httpMock: HttpTestingController;
  const endPoint = `http://localhost:8081/reserva/reservas`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ReservaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ReservaService);
  });

  it('should be created', () => {
    const serviciReserva: ReservaService = TestBed.inject(ReservaService);
    expect(serviciReserva).toBeTruthy();
  });

  it('deberia listar reservas', () => {
    const reservasMock = [
      new Reserva('1', '1', 'reserva 1', 4, '2021-03-02 10:00:00', '1'), new Reserva('2', '2', 'reserva 2', 4, '2021-03-02 10:00:00', '2')
    ];
    service.listar().subscribe(reservas => {
      expect(reservas.length).toBe(2);
      expect(reservas).toEqual(reservasMock);
    });
    const req = httpMock.expectOne(endPoint);
    expect(req.request.method).toBe('GET');
    req.flush(reservasMock);
  });

  it('deberia crear una reserva', () => {
    const reservaMock = new Reserva('1', '1', 'reserva 1', 4, '2021-03-02 10:00:00', '1');
    service.guardar(reservaMock).subscribe((respuesta) => {
      expect(respuesta).toEqual(1);
    });
    const req = httpMock.expectOne(endPoint);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<number>({body: 1}));
  });

  it('deberia eliminar un reserva', () => {
    const idDelete = '1';
    service.eliminar(idDelete).subscribe((respuesta) => {
      expect(respuesta);
    });
    const req = httpMock.expectOne(`${endPoint}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<void>());
  });
});
