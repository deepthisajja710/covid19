import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistricttableComponent } from './districttable.component';

describe('DistricttableComponent', () => {
  let component: DistricttableComponent;
  let fixture: ComponentFixture<DistricttableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistricttableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistricttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
