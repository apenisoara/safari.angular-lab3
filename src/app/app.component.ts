import { Component } from '@angular/core';

@Component({
  selector: 'ast-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ast';
  count = 0;

  incrementCount() {
    this.count++;
  }
}
