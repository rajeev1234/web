import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import {GlobalService} from '../global.service';
import {TestserviceService} from '../testservice.service';


@Component({
  selector: 'app-testingproject',
  templateUrl: './testing-project.component.html',
  styleUrls: ['./testing-project.component.css'],
  providers: [UserService, TestserviceService]
})
export class TestingProjectComponent implements OnInit {
  testing_project;
  constructor(private userService: UserService,
              private testService: TestserviceService,
              private router: Router,
               private global: GlobalService) {}

  ngOnInit() {
    this.testing_project = {
      title: '',
      description: '',
    };
  }

  test() {
    this.testService.testing(this.testing_project).subscribe(
      responce => {
        console.log('responce' , responce);
        // localStorage.setItem('username3', this.testing_project.username);
        // this.global.me = responce['user'];
        // console.log('token', responce['token']);
        // console.log();
        this.router.navigate(['/login']);
      },
      error => console.log('error', error )
    );
  }
}

