import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InheretorsComponent } from './inheretors.component';

describe('InheretorsComponent', () => {
  let component: InheretorsComponent;
  let fixture: ComponentFixture<InheretorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InheretorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InheretorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
