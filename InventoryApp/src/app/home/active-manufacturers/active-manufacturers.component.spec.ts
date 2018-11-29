import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveManufacturersComponent } from './active-manufacturers.component';

describe('ActiveManufacturersComponent', () => {
  let component: ActiveManufacturersComponent;
  let fixture: ComponentFixture<ActiveManufacturersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveManufacturersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveManufacturersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
