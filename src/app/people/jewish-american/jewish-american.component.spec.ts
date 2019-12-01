import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JewishAmericanComponent } from './jewish-american.component';

describe('JewishAmericanComponent', () => {
  let component: JewishAmericanComponent;
  let fixture: ComponentFixture<JewishAmericanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JewishAmericanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JewishAmericanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
