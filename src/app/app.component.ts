import { Component, ViewChild } from '@angular/core';
import { RectButtonComponent } from './rect-button/rect-button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(RectButtonComponent) button: RectButtonComponent
  title = 'app works!';
  setActive = () => {
     this.button.setPressure(true);
  }
}
