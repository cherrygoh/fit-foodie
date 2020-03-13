import { Component, OnInit, Input } from '@angular/core';
import { Meal } from '@app/shared/models/meal';
import { DiaryEntry } from '@app/shared/models/entry';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-food-diary',
  templateUrl: './food-diary.component.html',
  styleUrls: ['./food-diary.component.sass']
})
export class FoodDiaryComponent implements OnInit {

  @Input() meals: Meal[];
  @Input() diaryEntriesByMeal;
  
  // displayedColumns = ["name"];
  // displayedColumns = ["name", "calories", "protein", "carbs", "fat", "action"];
  displayedColumns = ["selection", "name", "calories", "protein", "carbs", "fat"];

  selectedEntries = new Set<DiaryEntry>();

  dataSources: MatTableDataSource<DiaryEntry>[];

  constructor() { }

  ngOnInit(): void {
  }

  // @Input() 
  // set diaryEntriesByMeal(diaryEntriesByMeal: DiaryEntry[][]) {
  //   this.diaryEntriesByMeal = diaryEntriesByMeal;
  //   this.dataSources = new Array(this.meals.length);
  //   this.diaryEntriesByMeal.map(entries => this.dataSources[entries[0].mealOrder] = new MatTableDataSource(entries));
  // }

  getTotal(meal: Meal, nutrition: number) {
    // switch (nutrition) {
    //   case 0:
    //     return this.diaryEntriesByMeal[meal.mealOrder].map(x => x.diaryEntryCalories).reduce((x, y) => x + y, 0);
    //   case 1:
    //     return this.diaryEntriesByMeal[meal.mealOrder].map(x => x.diaryEntryProtein).reduce((x, y) => x + y, 0);
    //   case 2:
    //     return this.diaryEntriesByMeal[meal.mealOrder].map(x => x.diaryEntryCarbs).reduce((x, y) => x + y, 0);;
    //   case 3:
    //     return this.diaryEntriesByMeal[meal.mealOrder].map(x => x.diaryEntryFat).reduce((x, y) => x + y, 0);
    // }
    return 0;
  }

  // select(event: MatCheckboxChange, entry: DiaryEntry) {
  //   if (event.checked) {
  //     this.selectedEntries.add(entry);
  //     if (this.selectedEntries.size == this.diaryEntriesByMeal[entry.mealOrder].length) {

  //   }
  //   else {
  //     this.selectedEntries.delete(entry);
  //   }
  // }

}
