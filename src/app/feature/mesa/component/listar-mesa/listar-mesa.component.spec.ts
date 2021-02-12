import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs/internal/observable/of';
import { Mesa } from '../../shared/model/mesa';
import { MesaService } from '../../shared/service/mesa.service';

import { ListarMesaComponent } from './listar-mesa.component';

describe('ListarMesaComponent', () => {
  let component: ListarMesaComponent;
  let fixture: ComponentFixture<ListarMesaComponent>;
  let servicio: MesaService;
  const mesas: Mesa[] = [new Mesa('1', 'mesa1', 8), new Mesa('2', 'mesa2', 8), new Mesa('3', 'mesa3', 8)];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarMesaComponent ],
      imports: [HttpClientTestingModule],
      providers: [MesaService, HttpService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMesaComponent);
    component = fixture.componentInstance;
    servicio = TestBed.inject(MesaService);
    spyOn(servicio, 'listar').and.returnValue(
      of(mesas)
    );
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should list componenst', () => {
    component.listaMesas.subscribe(resultado => {
      expect(3).toBe(resultado.length);
    });
  });
});
