import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-password-reset-confirm',
  templateUrl: './password-reset-confirm.component.html',
  styleUrls: ['./password-reset-confirm.component.css']
})
export class PasswordResetConfirmComponent implements OnInit {
  password_confirm;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
     this.password_confirm = {
      uid: '',
       token: '',
       new_password1: '',
       new_password2: '',
    };
  }
  password_reset_confirm() {
    this.userService.password_reset_confirm(this.password_confirm).subscribe(
            responce => {
        console.log('responce' , responce);
             localStorage.setItem('token', responce['token']);
        // this.global.me = responce['user'];
        // console.log('token', responce['token']);
        // console.log();
        this.router.navigate(['/login']);
      },
      error => console.log('error', error )
    );
    }

}
