import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EllipticButtonComponent } from './elliptic-button/elliptic-button.component';
import { YellowButtonComponent } from './yellow-button/yellow-button.component';
import { RectButtonComponent } from './rect-button/rect-button.component';

@NgModule({
  declarations: [
    AppComponent,
    EllipticButtonComponent,
    YellowButtonComponent,
    RectButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
