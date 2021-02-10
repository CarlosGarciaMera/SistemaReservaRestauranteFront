import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetadoHomeComponent } from './vetado-home.component';

describe('VetadoHomeComponent', () => {
  let component: VetadoHomeComponent;
  let fixture: ComponentFixture<VetadoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetadoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetadoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
