import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  time;
  items = ['Angular', 'React', 'Vue', 'Bootstrap', 'Node.js'];
  loggedIn = true;
  text = 'Hello World';

  constructor() {
    setInterval(() => {
      this.time = new Date().toTimeString();
    }, 1000);
  }

  // tslint:disable-next-line:typedef
  myEvent(event) {
    console.log(event);
  }

  ngOnInit(): void {
  }

}
