import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'ng-template-sample',
  template: `
  <!-- <ng-container [ngTemplateOutlet]="sayHelloTemplate"]>
  This text is not displayed
</ng-container> -->

<ng-template #sayHelloTemplate>
  <p> Say Hello</p>
</ng-template>
`,
  styleUrls: ['./ng-template.component.scss']
})
export class NgTemplateComponent implements OnInit {

  @ViewChild('sayHelloTemplate', { read: TemplateRef }) sayHelloTemplate:TemplateRef<any>;

  constructor(private vref:ViewContainerRef) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.vref.createEmbeddedView(this.sayHelloTemplate);
  }
}
