import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user.service';


@Component({
  selector: 'app-mailconfirm',
  templateUrl: './mailconfirm.component.html',
  styleUrls: ['./mailconfirm.component.css'],
  providers: [UserService]
})
export class MailconfirmComponent implements OnInit {
  loading: boolean;
  email: string;
  verify: string;


  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) {
    console.log('called verify constructor');
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
      this.verify = params['verify'];
    });
    // this.route.params.subscribe(params => console.log(params));
    // this.loading = false;
  }

  ngOnInit() {
      //   this.register = {
      //   key: this.route.params,
      // };
      //   this.confirm = {
      //     key: ''
      //   };
      //   console.log(this.register.key.value);
    this.confirmkey();
  }

  confirmkey() {
    this.userService.confirmUser(this.route.queryParams).subscribe(
      responce => {
        console.log('responce', responce);
        this.router.navigate(['/login']);
      },
      error => console.log('error', error)
    );
  }

}
