import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiFirstComponent } from './api-first.component';

describe('ApiFirstComponent', () => {
  let component: ApiFirstComponent;
  let fixture: ComponentFixture<ApiFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
