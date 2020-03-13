import { Component, OnInit, Input } from '@angular/core';
import { Meal } from '@app/shared/models/meal';
import { DiaryEntry } from '@app/shared/models/entry';

@Component({
  selector: 'app-food-diary',
  templateUrl: './food-diary.component.html',
  styleUrls: ['./food-diary.component.sass']
})
export class FoodDiaryComponent implements OnInit {

  @Input() meals: Meal[];
  @Input() diaryEntriesByMeal: DiaryEntry[][] = [];

  // displayedColumns = ["name"];
  displayedColumns = ["name", "calories", "protein", "carbs", "fat", "action"];

  constructor() { }

  ngOnInit(): void {
  }

  getTotal(meal: Meal, nutrition: number) {
    switch (nutrition) {
      case 0:
        return this.diaryEntriesByMeal[meal.mealOrder].map(x => x.diaryEntryCalories).reduce((x, y) => x + y, 0);
      case 1:
        return this.diaryEntriesByMeal[meal.mealOrder].map(x => x.diaryEntryProtein).reduce((x, y) => x + y, 0);
      case 2:
        return this.diaryEntriesByMeal[meal.mealOrder].map(x => x.diaryEntryCarbs).reduce((x, y) => x + y, 0);;
      case 3:
        return this.diaryEntriesByMeal[meal.mealOrder].map(x => x.diaryEntryFat).reduce((x, y) => x + y, 0);
    }
  }

}
