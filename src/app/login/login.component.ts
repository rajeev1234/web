import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';

import {Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin: FormGroup;
  loading: boolean;
  tokenstore: string;
  mytoken: string;


  constructor(private fb: FormBuilder,
              private router: Router,
              private userService: UserService,
              // private global: GlobalService
  ) {
      this.userLogin = this.fb.group({
        // use: ['', Validators.required],
        Username: ['', Validators.required],
        Password: ['', Validators.required]
    });
    }

  ngOnInit() {
    // this.loading = false;

    localStorage.clear();
    // if ( localStorage.getItem('token') && localStorage.getItem('account')) {
    //   this.global.me = JSON.parse(localStorage.getItem('account'));
    //   this.router.navigate(['/home']);
    // }
    }

  onLogin() {
    this.loading = true;
    console.log(this.userLogin.value);
     this.userService.loginUser(this.userLogin.value).subscribe(
      responce => {
        console.log(responce);
        localStorage.setItem('Token', JSON.stringify(responce));
        this.loading = true;
        // this.router.navigate(['/register']);
        this.tokenstore = JSON.stringify(responce);
      },
      error => {
        this.loading = false;
        console.log('error', error );
      }
    );
    }
    token() {
    this.mytoken = localStorage.getItem('Token');
    // console.log(mytoken);
    // this.mytoken;
    }
}
