import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { NativeDateAdapter } from '@angular/material/core';

import { DiaryEntryService } from '@app/core/services/diary-entry.service';
import { DiaryEntry } from '@app/shared/models/entry';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Meal } from '@app/shared/models/meal';
import { MealService } from '@app/core/services/meal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
  providers: [NativeDateAdapter]
})
export class DashboardComponent implements OnInit {

  username = "johnsmith"; // temporary

  currentDate: Date = new Date();
  selectedDate: FormControl = new FormControl(new Date());
  
  nutritionCounters: any[];

  diaryEntries: DiaryEntry[];
  meals: Meal[];

  // displayedColumns = ["name"];
  displayedColumns = ["name", "calories", "protein", "carbs", "fat"];

  constructor(private diaryEntryService: DiaryEntryService, private mealService: MealService) { }

  ngOnInit(): void {
    this.setSelectedDateAndFetchData(this.currentDate);
    this.mealService.getMeals(this.username).subscribe(meals => this.meals = meals);
  }

  nextDate() {
    let nextDate: Date = new Date();
    nextDate.setTime(this.selectedDate.value.getTime() + (1000 * 60 * 60 * 24));
    this.setSelectedDateAndFetchData(nextDate);
  }

  previousDate() {
    let previousDate: Date = new Date();
    previousDate.setTime(this.selectedDate.value.getTime() - (1000 * 60 * 60 * 24));
    this.setSelectedDateAndFetchData(previousDate);
  }

  // Sets date in datepicker input, fetch entry and counter data for selected date 
  setSelectedDateAndFetchData(date: Date) {
    this.selectedDate.setValue(date);
    this.getEntriesAndCountersForSelectedDate();
  }

  getEntriesAndCountersForSelectedDate() {
    this.diaryEntryService.getDiaryEntries(this.username, this.selectedDate.value).subscribe(diaryEntries => {
      this.diaryEntries = diaryEntries;
      this.calculateNutritionCounters();
    });
  }

  calculateNutritionCounters() {
    this.nutritionCounters = [{ name: 'Calories', unit: 'kcal' }, { name: 'Protein', unit: 'g' }, { name: 'Carbs', unit: 'g' }, { name: 'Fat', unit: 'g' }];

    this.nutritionCounters[0]['value'] = this.diaryEntries.map(x => x.diaryEntryCalories).reduce((x, y) => x + y);
    this.nutritionCounters[1]['value'] = this.diaryEntries.map(x => x.diaryEntryProtein).reduce((x, y) => x + y);
    this.nutritionCounters[2]['value'] = this.diaryEntries.map(x => x.diaryEntryCarbs).reduce((x, y) => x + y);
    this.nutritionCounters[3]['value'] = this.diaryEntries.map(x => x.diaryEntryFat).reduce((x, y) => x + y);
  }

  datePickerChange(event: MatDatepickerInputEvent<Date>) {
    this.getEntriesAndCountersForSelectedDate();
  }
}
