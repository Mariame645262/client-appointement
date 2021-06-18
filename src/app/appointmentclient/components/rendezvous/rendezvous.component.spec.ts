/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RendezvousComponent } from './rendezvous.component';

describe('RendezvousComponent', () => {
  let component: RendezvousComponent;
  let fixture: ComponentFixture<RendezvousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendezvousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RendezvousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
