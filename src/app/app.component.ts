import { Component, ViewChild} from '@angular/core';
import { RectButtonComponent, RectButtonColor } from './rect-button/rect-button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(RectButtonComponent) button: RectButtonComponent;

  red = RectButtonColor.RED;
  blue = RectButtonColor.BLUE;
  green = RectButtonColor.GREEN;
  yellow = RectButtonColor.YELLOW;

  setActive = () => {
     this.button.setPressure(true);
  }
}
