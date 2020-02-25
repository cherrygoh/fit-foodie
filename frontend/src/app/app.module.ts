import { NgModule } from '@angular/core';

import { AppComponent } from '@app/app.component';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
