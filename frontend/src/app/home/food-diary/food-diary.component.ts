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

  getTotal(meal: Meal, nutrition: String) {
    let total: number = 0;
    // switch (nutrition) {
    //   case 'calories':
    //     this.diaryEntriesByMeal[meal.mealOrder].map(x => total + x.diaryEntryCalories);
    //   case 'protein':
    //     this.diaryEntriesByMeal[meal.mealOrder].map(x => total + x.diaryEntryProtein);
    //   case 'carbs':
    //     this.diaryEntriesByMeal[meal.mealOrder].map(x => total + x.diaryEntryCarbs);
    //   case 'fat':
    //     this.diaryEntriesByMeal[meal.mealOrder].map(x => total + x.diaryEntryFat);
    // }

    return total;
  }

}
