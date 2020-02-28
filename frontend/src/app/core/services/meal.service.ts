import { Injectable } from '@angular/core';
import { CoreModule } from '@app/core/core.module';
import { of } from 'rxjs';
import { MOCK_MEALS } from '@app/shared/mocks/mock-meals';

@Injectable({
  providedIn: CoreModule
})
export class MealService {

  constructor() { }

  getMeals(username: string) {
    return of(MOCK_MEALS);
  }
}
