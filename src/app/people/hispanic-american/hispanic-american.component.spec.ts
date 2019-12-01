import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HispanicAmericanComponent } from './hispanic-american.component';

describe('HispanicAmericanComponent', () => {
  let component: HispanicAmericanComponent;
  let fixture: ComponentFixture<HispanicAmericanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HispanicAmericanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HispanicAmericanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
