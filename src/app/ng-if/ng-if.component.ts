import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-if',
  template: `
  <div class="app">
    <input type="text"
    [value]="name"
    (input)="handlChange($event.target.value)">
    
    <ng-template [ngIf]="name.length > 2">
      <div>

        Searching ... {{name}}
      </div>
    </ng-template>
    <div *ngIf="name.length">
     Searching ... {{name}}</div>
  </div>`,
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {

  name: string = '';

  handlChange(value: string) {
   
    this.name = value;
  }
  constructor() { }

  ngOnInit() {
  }

}
