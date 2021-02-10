import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaHomeComponent } from './reserva-home.component';

describe('ReservaHomeComponent', () => {
  let component: ReservaHomeComponent;
  let fixture: ComponentFixture<ReservaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
