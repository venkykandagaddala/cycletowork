import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  errorMessage: any = '';
  successMesage: any = ''
  visibility: boolean = false;

  constructor(private messageService: MessageService) {
    if (this.messageService.errorMessage) {
      this.messageService.errorMessage.subscribe((eMessage: any) => {
        this.errorMessage = eMessage;
        this.visibility = true;
      })
    }
    if(this.messageService.sucessMessage) {
      this.messageService.sucessMessage.subscribe((sMessage: any) => {
        this.successMesage = sMessage;
        this.visibility = true;
      })
    }
    
  }

  ngOnInit(): void {
  }

  onClick() {
    this.visibility = false;
    this.errorMessage = '';
    this.successMesage = ''
  }

}
