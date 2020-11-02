// tslint:disable: typedef
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  removeFirst(){
    if (Array.isArray(this.messages) && this.messages.length) {
      this.messages.shift();
    }
  }
}
