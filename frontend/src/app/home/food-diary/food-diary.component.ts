import { Component, OnInit, Input } from '@angular/core';
import { Meal } from '@app/shared/models/meal';
import { DiaryEntry } from '@app/shared/models/entry';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-food-diary',
  templateUrl: './food-diary.component.html',
  styleUrls: ['./food-diary.component.sass']
})
export class FoodDiaryComponent implements OnInit {

  @Input() meals: Meal[];
  @Input() dataSources: MatTableDataSource<DiaryEntry>[];
  
  displayedColumns = ["selection", "name", "calories", "protein", "carbs", "fat"];

  selections: SelectionModel<DiaryEntry>[] = [];

  constructor() { }

  ngOnInit(): void {
    this.meals.map(meal => this.selections.push(new SelectionModel<DiaryEntry>(true, [])));
  }

  getTotal(meal: Meal, nutrition: number) {
    switch (nutrition) {
      case 0:
        return this.dataSources[meal.mealOrder].data.map(x => x.diaryEntryCalories).reduce((x, y) => x + y, 0);
      case 1:
        return this.dataSources[meal.mealOrder].data.map(x => x.diaryEntryProtein).reduce((x, y) => x + y, 0);
      case 2:
        return this.dataSources[meal.mealOrder].data.map(x => x.diaryEntryCarbs).reduce((x, y) => x + y, 0);;
      case 3:
        return this.dataSources[meal.mealOrder].data.map(x => x.diaryEntryFat).reduce((x, y) => x + y, 0);
    }
  }

  isAllSelected(meal: Meal) {
    const numSelected = this.selections[meal.mealOrder].selected.length;
    const numRows = this.dataSources[meal.mealOrder].data.length;
    return numSelected == numRows;
  }

  selectAll(event: MatCheckboxChange, meal: Meal) {
    this.isAllSelected(meal) ? this.selections[meal.mealOrder].clear() : this.dataSources[meal.mealOrder].data.forEach(data => this.selections[meal.mealOrder].select(data));
  }
}
