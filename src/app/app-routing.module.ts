
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimerComponent } from './timer/timer.component';
import { StartComponent } from './start/start.component';
import {AppComponent} from './app.component';
import {UserdetailComponent} from './userdetail/userdetail.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {MailconfirmComponent} from './mailconfirm/mailconfirm.component';
import {PasswordComponent} from './password/password.component';
import {PasswordResetConfirmComponent} from './password-reset-confirm/password-reset-confirm.component';
import {TestingProjectComponent} from './testing-project/testing-project.component';


const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'start', component: StartComponent },
  { path: 'userdetail', component: UserdetailComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'accounts/confirm-email', component: MailconfirmComponent},
  { path: 'password_reset' , component: PasswordComponent},
  { path: 'password_reset_confirm', component: PasswordResetConfirmComponent},
  { path: 'test', component: TestingProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
