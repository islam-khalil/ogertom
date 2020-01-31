import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintDeathCardComponent } from './print-death-card.component';

describe('PrintDeathCardComponent', () => {
  let component: PrintDeathCardComponent;
  let fixture: ComponentFixture<PrintDeathCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintDeathCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintDeathCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
