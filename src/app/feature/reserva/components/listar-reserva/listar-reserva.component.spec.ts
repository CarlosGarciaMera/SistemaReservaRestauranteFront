import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReservaService } from '../../shared/service/reserva.service';

import { ListarReservaComponent } from './listar-reserva.component';
import { HttpService } from '@core/services/http.service';
import { Reserva } from '../../shared/model/reserva';
import { of } from 'rxjs/internal/observable/of';

describe('ListarReservaComponent', () => {
  let component: ListarReservaComponent;
  let fixture: ComponentFixture<ListarReservaComponent>;
  let servicio: ReservaService;

  const listaReservas: Reserva[] = [new Reserva('1', '1', 'reserva 1', 4, '2021-03-02 10:00:00', '1'),
    new Reserva('2', '2', 'reserva 2', 4, '2021-03-02 10:00:00', '2')];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarReservaComponent ],
      imports: [HttpClientTestingModule],
      providers: [ReservaService, HttpService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarReservaComponent);
    component = fixture.componentInstance;
    servicio = TestBed.inject(ReservaService);
    spyOn(servicio, 'listar').and.returnValue(
      of(listaReservas)
    );
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should list componenst', () => {
    component.reservas.subscribe(resultado => {
      expect(2).toBe(resultado.length);
    });
  });
});
