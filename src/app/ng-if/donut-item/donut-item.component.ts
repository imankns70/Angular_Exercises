import { Component, Input, OnInit } from '@angular/core';
import { Donut } from '../ng-if.component';

@Component({
  selector: 'donut-item',
  template: ` 
   
 
  
  <li>
  {{counter}}. {{donut.name}}
  </li> 
 
 
 

`,
  styleUrls: ['./donut-item.component.css']
})
export class DonutItemComponent implements OnInit {

  @Input()
   donut: Donut

  @Input()
  counter: number;

  constructor() { }

  ngOnInit() {
   
  }

}
