/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CartlistComponent } from './cartlist.component';

describe('CartlistComponent', () => {
  let component: CartlistComponent;
  let fixture: ComponentFixture<CartlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
