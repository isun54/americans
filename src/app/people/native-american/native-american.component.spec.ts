import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeAmericanComponent } from './native-american.component';

describe('NativeAmericanComponent', () => {
  let component: NativeAmericanComponent;
  let fixture: ComponentFixture<NativeAmericanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeAmericanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeAmericanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
