import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs/internal/observable/of';
import { ListaNegra } from '../../shared/model/listanegra';
import { ListanegraService } from '../../shared/service/listanegra.service';

import { ListarVetadosComponent } from './listar-vetados.component';

describe('ListarVetadosComponent', () => {
  let component: ListarVetadosComponent;
  let fixture: ComponentFixture<ListarVetadosComponent>;
  let servicio: ListanegraService;
  const vetados: ListaNegra[] = [new ListaNegra('1', '1', 'Vetado 1'), new ListaNegra('2', '2', 'Vetado 2')];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarVetadosComponent ],
      imports: [HttpClientTestingModule],
      providers: [ListanegraService, HttpService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVetadosComponent);
    component = fixture.componentInstance;
    servicio = TestBed.inject(ListanegraService);
    spyOn(servicio, 'listar').and.returnValue(
      of(vetados)
    );
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should list componenst', () => {
    component.vetados.subscribe(resultado => {
      expect(2).toBe(resultado.length);
    });
  });
});
