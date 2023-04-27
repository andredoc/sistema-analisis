import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOption2Component } from './header-option2.component';

describe('HeaderOption2Component', () => {
  let component: HeaderOption2Component;
  let fixture: ComponentFixture<HeaderOption2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderOption2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderOption2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
