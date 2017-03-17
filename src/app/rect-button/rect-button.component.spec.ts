import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectButtonComponent, RectButtonColor } from './rect-button.component';
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
  });

  it('should create', () => {
    component.color = RectButtonColor.BLUE;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('setPressure', () => {
    beforeEach(() => {
      component.color = RectButtonColor.BLUE;
      fixture.detectChanges();
    });
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

  describe('setColor', () => {
    it('should raise an error on missing color', () => {
      expect(() => { fixture.detectChanges();}).toThrow();
    });
    [{
      input: RectButtonColor.RED,
      output: {red: true, blue: false, green: false, yellow: false}
    }, {
      input: RectButtonColor.BLUE,
      output: {red: false, blue: true, green: false, yellow: false}
    }, {
      input: RectButtonColor.GREEN,
      output: {red: false, blue: false, green: true, yellow: false}
    }, {
      input: RectButtonColor.YELLOW,
      output: {red: false, blue: false, green: false, yellow: true}
    }].forEach(function (testCase) {
      const currentColor: string = Object.keys(testCase.output)
        .filter((colorName) => {
          return testCase.output[colorName];
        })[0];
      it (`should render button in ${currentColor} when passing ${testCase.input.toString()}`, () => {
        component.color = testCase.input;
        fixture.detectChanges();
        expect(getClassList(fixture).contains('blue')).toBe(testCase.output.blue);
        expect(getClassList(fixture).contains('red')).toBe(testCase.output.red);
        expect(getClassList(fixture).contains('green')).toBe(testCase.output.green);
        expect(getClassList(fixture).contains('yellow')).toBe(testCase.output.yellow)
      });
    });
  });
});
