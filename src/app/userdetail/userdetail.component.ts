import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Registration} from './userdetail';
import {Subscription} from 'rxjs/Subscription';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import {User} from '../user';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  userSub: Subscription;
  account: User = new User();
  registrations;
  fileToUpload;


  constructor(private userService: UserService,
              private global: GlobalService,
              private router: Router) {
  }

  ngOnInit() {
    this.registrations = {
      email: '',
      // fileToUpload: File ,
    };
    //    this.userSub = this.global.user.subscribe(
    //   me => this.account = me
    // );
    //  if ( localStorage.getItem('token') && localStorage.getItem('account')) {
    //   this.global.me = JSON.parse(localStorage.getItem('account'));
    // } else {
    //   this.router.navigate(['/login']);
    // }
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    this.userService.postFile(this.fileToUpload).subscribe(data => {
      console.log(this.fileToUpload);
      // do something, if upload success
    }, error => {
      console.log(error);
    });
  }

  uploadFileToActivity1() {
    this.userService.postdetail(this.registrations).subscribe(data => {
      console.log(this.registrations);
      // do something, if upload success
    }, error => {
      console.log(error);
    });
  }
     logoutClicked() {
    this.global.me = new User();
    localStorage.removeItem('token');
    localStorage.removeItem('account');
    this.router.navigate(['/login']);
  }
}
