import { DiaryEntry } from '../models/entry';

export const MOCK_ENTRIES: DiaryEntry[] = [
    { diaryEntryId: 1, diaryEntryName: 'Curry', 
    diaryEntryCalories: 600, diaryEntryCarbs: 100, 
    diaryEntryProtein: 60, diaryEntryFat: 60, 
    username: 'johnsmith', mealId: 1, diaryEntryDate: new Date() }
]