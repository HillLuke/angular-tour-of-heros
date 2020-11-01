import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  timer = timer(3000, 3000);

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
    this.timer.subscribe((val) => {this.removeFirstMessage(); });
  }

  removeFirstMessage(): void{
    this.messageService.removeFirst();
  }
}
