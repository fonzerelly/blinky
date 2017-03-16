import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectButtonComponent } from './rect-button.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('RectButtonComponent', () => {
  let component: RectButtonComponent;
  let fixture: ComponentFixture<RectButtonComponent>;

  const getClassList = (fix: ComponentFixture<RectButtonComponent>) => {
      return fix.debugElement.nativeElement.querySelector('div div').classList;
    };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('setPressure', () => {

    it('should render button initially as inactive', () => {
      expect(getClassList(fixture).contains('inactive')).toBe(true);
      expect(getClassList(fixture).contains('active')).toBe(false);
    });

    describe('when set to true', () => {
      beforeEach(() => {
        component.setPressure(true);
        fixture.detectChanges();
      });
      it('should renter button as active', () => {
        expect(getClassList(fixture).contains('inactive')).toBe(false);
        expect(getClassList(fixture).contains('active')).toBe(true);
      });
    });
  });
});
