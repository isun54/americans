import { Component, OnInit } from '@angular/core';
import { ContectService } from 'src/app/services/contect.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ContactUs } from 'src/app/class/contact-us';

@Component({
  selector: 'app-forms1',
  templateUrl: './forms1.component.html',
  styleUrls: ['./forms1.component.css']
})
export class Forms1Component implements OnInit {

  group = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    whatsapp: new FormControl(''),
    text: new FormControl(''),
  });
  constructor(public contactUssrv: ContectService) { }

  ngOnInit() {


  }
  contactUsForm_onSubmit() {
    let contactus: ContactUs = this.group.value;
    this.contactUssrv.contactList.push(contactus);
  }

}
