import { Injectable } from '@angular/core';
import { MOCK_ENTRIES } from '@app/shared/mocks/mock-entries';
import { CoreModule } from '@app/core/core.module';

@Injectable({
  providedIn: CoreModule
})
export class DiaryEntryService {

  constructor() { }

  getDiaryEntries(username: string, date: Date) {
    return MOCK_ENTRIES.filter(x => x.diaryEntryDate.getFullYear() == date.getFullYear() && x.diaryEntryDate.getMonth() == date.getMonth() && x.diaryEntryDate.getDate() == date.getDate());
  }
}
