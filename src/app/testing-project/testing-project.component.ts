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
      description1: '',
    };
        const token = localStorage.getItem('Token');
    const token1 = token.replace(/['"]+/g, '');
    console.log(token1);
    // console.log(token);
  }

  test() {
    // const headers = new HttpHeaders();
    this.testService.testing(this.testing_project).subscribe(
      responce => {
        console.log('responce' , responce);
        // this.router.navigate(['/login']);
      },
      error => console.log('error', error )
    );
  }
}

