import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  register;
  constructor(private userService: UserService,
              private router: Router) {}

  ngOnInit() {
    this.register = {
      username: '',
      password: '',
      email: '',
    };
  }
  registerUser() {
    this.userService.registerUser(this.register).subscribe(
      responce => {
        this.router.navigate(['/login']);
      },
      error => console.log('error', error )
    );
  }
}
