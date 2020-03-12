import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FoodDiaryComponent } from './food-diary/food-diary.component';

@NgModule({
  declarations: [
    DashboardComponent,
    FoodDiaryComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: 
  [
    DashboardComponent,
    FoodDiaryComponent,
  ]
})
export class HomeModule { }
