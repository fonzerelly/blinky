import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rect-button',
  templateUrl: './rect-button.component.html',
  styleUrls: ['./rect-button.component.css']
})
export class RectButtonComponent implements OnInit {

  @Input() color: string;
  private pressed: boolean;
  setPressure (isPressed: boolean) {
    this.pressed = isPressed;
  }

  public renderState () {
    return {
      active: this.pressed,
      inactive: !this.pressed
    };
  }

  constructor() { }

  ngOnInit() {
    this.setPressure(false);
  }



}
