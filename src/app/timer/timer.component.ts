import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  allowButton = false;
  time = 0;
  servername = '';
  server = 'new server declarations';
  servercreated = false;

  constructor() {
    // setTimeout(() => {this.allowButton = true; }, 2000);
  }

  ngOnInit() {
    // setTimeout(() =>
    // this.allowButton = true,
    // this.time );
  }

  settime() {
    setTimeout(() =>
        this.allowButton = true,
        this.time);
  }


  onupdate(event: any) {
    console.log(event);

  }

  onupdateserver(event: Event) {
    this.servername = (<HTMLInputElement>event.target).value;
  }

  oncreateserver() {
    this.servercreated = true;
    this.server = 'my server is created' + this.servername;
    }

}
