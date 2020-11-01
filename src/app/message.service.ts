import { Injectable } from '@angular/core';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];
  timer = timer(3000);

  add(message: string) {
    this.messages.push(message);
    // Remove the message after 3 seconds - probably not the best way to do it
    this.timer.subscribe((val) => {this.removeFirst();});
  }

  clear() {
    this.messages = [];
  }

  removeFirst(){
    this.messages.shift();
  }
}
