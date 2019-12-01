import { Injectable } from '@angular/core';
import { ContactUs } from '../class/contact-us';

@Injectable({
  providedIn: 'root'
})
export class ContectService {

  constructor() { }
  contactList: ContactUs [] = [];
}
