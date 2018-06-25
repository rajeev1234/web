import { Component, OnInit } from '@angular/core';
// import { Start } from 'start';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  showSecret = false;
  log = [];
  ontoggledetails() {
    // this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
    // this.log.push(new Date());
  }

  constructor() { }

  ngOnInit() {
  }

}
