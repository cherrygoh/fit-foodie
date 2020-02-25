import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    SharedModule
  ]
})
export class HomeModule { }
