import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app-routing.module';
import { DiaryEntryService } from './services/diary-entry/diary-entry.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    DiaryEntryService
  ]
})
export class CoreModule { }
