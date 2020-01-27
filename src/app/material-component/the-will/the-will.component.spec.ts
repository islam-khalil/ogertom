import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheWillComponent } from './the-will.component';

describe('TheWillComponent', () => {
  let component: TheWillComponent;
  let fixture: ComponentFixture<TheWillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheWillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheWillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
