import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfricanamericanComponent } from './africanamerican.component';

describe('AfricanamericanComponent', () => {
  let component: AfricanamericanComponent;
  let fixture: ComponentFixture<AfricanamericanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfricanamericanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfricanamericanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
