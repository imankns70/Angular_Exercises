import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Donut {
  name: string,
  price: number
}

@Component({
  selector: 'ng-if',
  template: `
  <div class="app">

    <input type="text"
    [value]="name"
    (input)="handlChange($event.target.value)">
     
    <div *ngIf="name.length > 2; else searchMore">

        Searching ... {{name}}
      </div>
    <ng-template #searchMore>
     <div>
     waiting to search</div>
    </ng-template>
<ng-container *ngIf="(donuts$ | async) as donuts">
  <ul *ngIf="donuts.length; else nothing">
         <donut-item [donut]="donut" [counter]="i" *ngFor="let donut of donuts; index as i"></donut-item>     
  </ul>
</ng-container>
    
<ng-template #nothing>
  no donuts !!!
 </ng-template>
  </div>`,
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {

  name: string = '';
  donuts$: Observable<Donut[]> = of([
    { name: 'Glazed Fudge', price: 119 },
    { name: 'Gril Fry', price: 220 }
  ]);
  handlChange(value: string) {

    this.name = value;
  }
  constructor() { }

  ngOnInit() {
  }

}
