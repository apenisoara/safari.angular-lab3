import { Component } from '@angular/core';

@Component({
  selector: 'ast-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ast';
  clicks = 0;
  onClick() {
    this.clicks++;
  }
}
