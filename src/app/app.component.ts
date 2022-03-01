import { Component } from '@angular/core';

// this is called a decorator. we know it is a decorator because of the @ symbol
@Component({
  // how your component is referenced in your html files
  selector: 'app-root',
  // the html file that this component should utilize, called the view
  templateUrl: './app.component.html',
  // the styles file(s) that this componet should utilize
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'net-ninja-app';

  ninja = {
    name: 'Ryu',
    belt: 'Red',
  };

  yell(e: any) {
    console.log(e);
  }
}
