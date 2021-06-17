/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RendezvousDoneComponent } from './rendezvous-done.component';

describe('RendezvousDoneComponent', () => {
  let component: RendezvousDoneComponent;
  let fixture: ComponentFixture<RendezvousDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendezvousDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RendezvousDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
