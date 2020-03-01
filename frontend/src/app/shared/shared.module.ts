import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  imports: [
    CommonModule,

    BrowserAnimationsModule,
    ReactiveFormsModule,

    FlexLayoutModule,

    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatNativeDateModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule
  ],
  exports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,

    FlexLayoutModule, 
    
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatNativeDateModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule
  ]
})
export class SharedModule { }
