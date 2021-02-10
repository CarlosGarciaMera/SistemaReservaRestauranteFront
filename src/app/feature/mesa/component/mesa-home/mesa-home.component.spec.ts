import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaHomeComponent } from './mesa-home.component';

describe('MesaHomeComponent', () => {
  let component: MesaHomeComponent;
  let fixture: ComponentFixture<MesaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
