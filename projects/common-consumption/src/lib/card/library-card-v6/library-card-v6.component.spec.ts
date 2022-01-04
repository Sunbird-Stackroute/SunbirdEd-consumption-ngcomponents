import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryCardV6Component } from './library-card-v6.component';

describe('LibraryCardV6Component', () => {
  let component: LibraryCardV6Component;
  let fixture: ComponentFixture<LibraryCardV6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryCardV6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryCardV6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
