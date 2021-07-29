import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  messageSent : boolean = false;
  userMail : any = [];

  constructor(
    private contactService : ContactService
  ) { }

  ngOnInit(): void { }

  // Post Request tp send email
  sendUserMessage(userMail) {
    this.contactService.sendMail(userMail).subscribe(res => {
      console.log("Successfully sent message to Mashohle!", res);
    });
  }

  contact() {
    this.messageSent = true;

    let userMail = {
      name: (<HTMLInputElement>document.getElementById('name')).value,
      email: (<HTMLInputElement>document.getElementById('email')).value,
      subject: (<HTMLInputElement>document.getElementById('subject')).value,
      message: (<HTMLInputElement>document.getElementById('message')).value
    }
    
    console.log(userMail);
    this.sendUserMessage(userMail);
    
  }

}
