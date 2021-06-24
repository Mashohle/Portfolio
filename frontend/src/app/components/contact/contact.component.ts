import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ContactService } from '../../services/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm : FormGroup;
  messageSent : boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private contactService : ContactService
  ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name : ['', Validators.required],
      email : ['', Validators.required],
      subject : ['', Validators.required],
      message : ['', Validators.required],
    });
  }

  // Post Request tp send email
  sendUserMessage(userMail : Object) {
    this.contactService.sendMail(userMail).subscribe(res => {
      console.log("Successfully sent message to Mashohle!", res);
    });
  }

  contact() {
    this.messageSent = true;

    if(this.contactForm.invalid) {
      return console.log("Please try resending the message again!");
    }

    // Proceeds to send email if the form is properly filled
    this.sendUserMessage(this.contactForm.value);
    this.contactForm.reset();
    this.messageSent = false;
  }

}
