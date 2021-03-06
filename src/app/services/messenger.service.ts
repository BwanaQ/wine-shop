import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessengerService {
  subject = new Subject();
  constructor() {}
  sendMsg(wine) {
    console.log('message sent: ' + wine.caseQty);
    this.subject.next(wine);
  }
  getMsg() {
    return this.subject.asObservable();
  }
}
