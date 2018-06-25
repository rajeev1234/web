import { Injectable } from '@angular/core';
// import { environment } from '../../environments/environment';
import { CognitoUserPool, CognitoAccessToken } from 'amazon-cognito-identity-js';
// import * as AWS from 'aws-sdk/global';
// import * as awsservice from 'aws-sdk/lib/service';
// import * as CognitoIdentity from 'aws-sdk/clients/cognitoidentity';
// import * as aa from 'aws-sdk';


@Injectable()
export class CognitoUtil {
  get() {
    return CognitoAccessToken;
  }
}


