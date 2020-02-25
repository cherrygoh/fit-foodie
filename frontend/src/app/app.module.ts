import { NgModule } from '@angular/core';

import { AppComponent } from '@app/app.component';
import { CoreModule } from './core/core.module';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
