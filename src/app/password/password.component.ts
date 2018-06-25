import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
    password_reset;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
     this.password_reset = {
      email: '',
    };
  }
    password() {
    this.userService.password_set(this.password_reset).subscribe(
            responce => {
        console.log('responce' , responce);
        //      localStorage.setItem('token', responce['token']);
        // this.global.me = responce['user'];
        // console.log('token', responce['token']);
        // console.log();
        this.router.navigate(['/password_reset_confirm']);
      },
      error => console.log('error', error )
    );
    }

}
