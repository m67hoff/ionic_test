import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class Pro1Provider {

  private s: string

  constructor() {
    console.log('Hello Pro1Provider Provider');
    this.s = "initial"
  }
  
  getS() { return this.s}
  setS(s) { this.s = s}

}
