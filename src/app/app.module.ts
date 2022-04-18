import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { CreditCardDirective } from './credit-card/credit-card.directive';
import { TooltipDirective } from './credit-card/tooltip.directive';
import { OneComponent } from './change-detection/one/one.component';
import { TwoComponent } from './change-detection/two/two.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { AppComponent } from './app.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { PassengerDetailComponent } from '../app//passenger/components/passenger-detail/passenger-detail.component';
import { PassengerCountComponent } from '../app//passenger/components/passenger-count/passenger-count.component';

import { NgForComponent } from './ng-for/ng-for.component';
import { PassengerDashboardComponent } from './passenger/containers/passenger-dashboard/passenger-dashboard.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';

@NgModule({
  declarations: [			
    AppComponent,
    CreditCardComponent,
    CreditCardComponent,
    CreditCardDirective,
    TooltipDirective,
    ChangeDetectionComponent,
    OneComponent, TwoComponent,
      NgIfComponent,
      NgForComponent,
      PassengerCountComponent,
      PassengerDetailComponent,
      PassengerDashboardComponent,
      NgTemplateComponent
   ],
  imports: [
  
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
