import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  homeTitle = 'Welcome to the ninja directory';
  myString = 'I love food';
  myBoolean = true;

  // accepts passed in data, similar to props
  @Input() ninja: any;

  // creates emitter, which must be used in separate function
  @Output() onYell = new EventEmitter();

  // grabs custom event and emits it up to parent component
  fireYellEvent(e: any) {
    this.onYell.emit(e);
  }

  alertMe(newString: string) {
    alert(newString);
  }

  constructor() {}

  ngOnInit(): void {}
}
