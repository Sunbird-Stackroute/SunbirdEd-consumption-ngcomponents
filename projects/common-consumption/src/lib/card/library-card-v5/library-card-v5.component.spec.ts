import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryCardV5Component } from './library-card-v5.component';

describe('LibraryCardV5Component', () => {
  let component: LibraryCardV5Component;
  let fixture: ComponentFixture<LibraryCardV5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryCardV5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryCardV5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
