/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TypeListarComponent } from './type-listar.component';

describe('TypeListarComponent', () => {
  let component: TypeListarComponent;
  let fixture: ComponentFixture<TypeListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
