import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OgertomStoreComponent } from './ogertom-store.component';

describe('OgertomStoreComponent', () => {
  let component: OgertomStoreComponent;
  let fixture: ComponentFixture<OgertomStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgertomStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OgertomStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
