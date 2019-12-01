import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ContactUs } from 'src/app/class/contact-us';
import { ContectService } from 'src/app/services/contect.service';

@Component({
  selector: 'app-contact-us1',
  templateUrl: './contact-us1.component.html',
  styleUrls: ['./contact-us1.component.css']
})
export class ContactUs1Component implements OnInit {

group = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    whatsapp: new FormControl(''),
    text: new FormControl(''),
    });

    message;
  constructor(public contactsrv: ContectService) { }

  ngOnInit() {
  }
  onSubmit() {
    const contectus: ContactUs = this.group.value;
    if (contectus.whatsapp ) {
      this.message = 'we will send u whatsapp';
    } else {
      this.message = 'we will call u';
    }
  }
}
