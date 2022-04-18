import { Component, OnInit } from '@angular/core';

interface Passenger {
id:number,
name:string,
checkedIn:boolean
}
@Component({
  selector: 'app-ng-for',
  template:  `  
   <!-- <h2> ngForOf</h2>
  <ng-template ngFor let-passenger let-i="index" [ngForOf]="passengers">
   
        {{passenger.id}} {{passenger.name}}
 
     
  </ng-template> -->
  <div>
  <h2> *ng-for</h2>
    <ul>
      <!-- <li *ngFor="let passenger of passengers; let i = index"></li> -->
      <li *ngFor="let passenger of passengers; index as i ">
        <span class="status"
    
        [ngClass]="{
          'checked-in':passenger.checkedIn,
          'checked-out':!passenger.checkedIn
        }"
        ></span>
        {{passenger.id}} {{passenger.name}}
      </li>
    </ul>
  </div>
  
  `,
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {
 
  passengers:Passenger[] = [
    {
      id:1,
      name:'iman',
      checkedIn:true
    },
    {
      id:2,
      name:'fafa',
      checkedIn:true
    },
    {
      id:3,
      name:'sepid',
      checkedIn:false
    },
    {
      id:4,
      name:'farhan',
      checkedIn:false
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
