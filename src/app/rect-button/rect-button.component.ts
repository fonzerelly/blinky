import { Component, OnInit, Input } from '@angular/core';

export enum RectButtonColor {
  RED = 1,
  BLUE,
  GREEN,
  YELLOW
}

@Component({
  selector: 'app-rect-button',
  templateUrl: './rect-button.component.html',
  styleUrls: ['./rect-button.component.css']
})
export class RectButtonComponent implements OnInit {

  private pressed: boolean;
  setPressure (isPressed: boolean) {
    this.pressed = isPressed;
  }

  @Input() color: RectButtonColor;

  public renderState () {
    const color = this.color;
    return {
      active: this.pressed,
      inactive: !this.pressed,
      blue: color === RectButtonColor.BLUE,
      red: color === RectButtonColor.RED,
      green: color === RectButtonColor.GREEN,
      yellow: color === RectButtonColor.YELLOW
    };
  }

  constructor() { }

  ngOnInit() {
    this.setPressure(false);
    if (this.color === undefined) {
      throw new Error ('Attribute Color is mandatory!');
    }
  }
}
