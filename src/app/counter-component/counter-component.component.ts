import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.css']
})
export class CounterComponentComponent implements OnInit {
  displayText = false;
  log = [];


  constructor() { 
   }

  ngOnInit(): void {
  }

  onShowText() {
    this.displayText = !this.displayText;
    this.log.push(new Date());
  }

  getColor() {
    return this.log.length > 4 ? 'red' : 'white'
  }

}
