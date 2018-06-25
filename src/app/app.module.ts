import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserService} from './user.service';
// import { MatButtonModule} from '@angular/material';
// import { MatIconModule} from '@angular/material';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { TimerComponent } from './timer/timer.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { LoginComponent } from './login/login.component';
import { GlobalService} from './global.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MailconfirmComponent } from './mailconfirm/mailconfirm.component';
import { PasswordComponent } from './password/password.component';
import { PasswordResetConfirmComponent } from './password-reset-confirm/password-reset-confirm.component';

import { TestingProjectComponent } from './testing-project/testing-project.component';
import {TestserviceService} from './testservice.service';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    TimerComponent,
    UserdetailComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    MailconfirmComponent,
    PasswordComponent,
    PasswordResetConfirmComponent,

    TestingProjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [ GlobalService, TestserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
