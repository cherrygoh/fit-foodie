import { Injectable } from '@angular/core';
import { MOCK_ENTRIES } from '@app/shared/mocks/mock-entries';
import { CoreModule } from '@app/core/core.module';
import { of } from 'rxjs';

@Injectable({
  providedIn: CoreModule
})
export class DiaryEntryService {

  constructor() { }

  getDiaryEntries(username: string, date: Date) {
    return of(MOCK_ENTRIES.filter(x => x.diaryEntryDate.getFullYear() == date.getFullYear() && x.diaryEntryDate.getMonth() == date.getMonth() && x.diaryEntryDate.getDate() == date.getDate()));
  }
}
