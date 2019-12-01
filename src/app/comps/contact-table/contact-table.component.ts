import { Component, OnInit } from '@angular/core';
import { ContectService } from 'src/app/services/contect.service';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css']
})
export class ContactTableComponent implements OnInit {

  constructor(public cotactsvc: ContectService) { }

  ngOnInit() {
  }

}
