import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-firstform',
  templateUrl: './firstform.component.html',
  styleUrls: ['./firstform.component.css']
})
export class FirstformComponent implements OnInit {

  constructor() { }


  name = new FormControl('');
  age = new FormControl('');

  updateforms: {}[] = [];

  ngOnInit() {
  }
  add() {
    this.updateforms.push({
      name: this.name.value,
      age: this.age.value,
    });
  }
}
