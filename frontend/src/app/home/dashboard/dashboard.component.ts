import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, NativeDateModule } from '@angular/material/core';

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment';
import { DiaryEntryService } from '@app/core/services/diary-entry/diary-entry.service';
import { DiaryEntry } from '@app/shared/models/entry';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
  providers: [
    {
      provide: DateAdapter, useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class DashboardComponent implements OnInit {

  currentDate: Date = new Date();
  selectedDate: FormControl = new FormControl(new Date());

  nutritionCounters: any[]; 
  diaryEntries: DiaryEntry[];

  constructor(private diaryEntryService: DiaryEntryService) { }

  ngOnInit(): void {
    this.selectedDate.setValue(this.currentDate);
    this.getEntriesAndCountersForDate();
  }

  nextDate() {
    let nextDate: Date = new Date();
    nextDate.setDate(this.selectedDate.value.getDate() + 1);
    this.selectedDate.setValue(nextDate);
    
    this.getEntriesAndCountersForDate();
  }

  previousDate() {
    let previousDate: Date = new Date();
    previousDate.setDate(this.selectedDate.value.getDate() - 1);
    this.selectedDate.setValue(previousDate);

    this.getEntriesAndCountersForDate();
  }

  getEntriesAndCountersForDate() {
    this.diaryEntries = this.diaryEntryService.getDiaryEntries("johnsmith", this.selectedDate.value);
    this.calculateNutritionCounters();
  }

  calculateNutritionCounters() {
    this.nutritionCounters = [ {name: 'Calories', unit: 'kcal'}, { name: 'Protein', unit: 'g' }, { name: 'Carbs', unit: 'g' }, { name: 'Fat', unit: 'g' } ];

    this.nutritionCounters[0]['value'] = this.diaryEntries.map(x => x.diaryEntryCalories).reduce((x, y) => x + y);
    this.nutritionCounters[1]['value'] = this.diaryEntries.map(x => x.diaryEntryProtein).reduce((x, y) => x + y);
    this.nutritionCounters[2]['value'] = this.diaryEntries.map(x => x.diaryEntryCarbs).reduce((x, y) => x + y);
    this.nutritionCounters[3]['value'] = this.diaryEntries.map(x => x.diaryEntryFat).reduce((x, y) => x + y);
  }

}
