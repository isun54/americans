import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuroAmericanComponent } from './euro-american.component';

describe('EuroAmericanComponent', () => {
  let component: EuroAmericanComponent;
  let fixture: ComponentFixture<EuroAmericanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuroAmericanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuroAmericanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
