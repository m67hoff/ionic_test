import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthProvider {

  constructor(public http: Http) {
    console.log('Hello AuthProvider Provider');
  }

  validateUsername(username) {
    // const SERVER_ADDRESS = "https://red-mh.mybluemix.net"
    const SERVER_ADDRESS = "http://localhost:4567"
    
    return this.http.get(SERVER_ADDRESS + '/auth/validate-username/' + username).map(res => res.json());
  }

}
