import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import {GlobalService} from '../global.service';
import {TestserviceService} from '../testservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService, TestserviceService]
})
export class RegisterComponent implements OnInit {
  register;
  constructor(private userService: UserService,
              private testService: TestserviceService,
              private router: Router,
               private global: GlobalService) {}

  ngOnInit() {
    this.register = {
      // username: '',
      // password1: '',
      // password2: '',
      email: '',
      password: '',
    };
  }
  registerUser() {
    this.userService.registerUser(this.register).subscribe(
      responce => {
        console.log('responce' , responce);
        // localStorage.setItem('username3', this.register.username);
        // this.global.me = responce['user'];
        // console.log('token', responce['token']);
        // console.log();
        this.router.navigate(['/login']);
      },
      error => console.log('error', error )
    );
  }
  test() {
    this.testService.testing(this.register).subscribe(
      responce => {
        console.log('responce' , responce);
        localStorage.setItem('username3', this.register.username);
        // this.global.me = responce['user'];
        // console.log('token', responce['token']);
        // console.log();
        this.router.navigate(['/login']);
      },
      error => console.log('error', error )
    );
  }

}
