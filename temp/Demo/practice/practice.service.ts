import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {

  private sendPriceSubject = new BehaviorSubject<number>(300);
  getPrice$ = this.sendPriceSubject.asObservable()

  constructor() { }

  setPrice(price: number) {
    this.sendPriceSubject.next(price)
  }
}
