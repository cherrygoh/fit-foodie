import { DiaryEntry } from '../models/entry';

export const MOCK_ENTRIES: DiaryEntry[] = [
    { diaryEntryId: 1, diaryEntryName: 'Curry', 
    diaryEntryCalories: 600, diaryEntryCarbs: 100, 
    diaryEntryProtein: 60, diaryEntryFat: 60, 
    username: 'johnsmith', mealId: 1, diaryEntryDate: new Date(2020, 1, 25) },

    { diaryEntryId: 2, diaryEntryName: 'Chicken Nuggets', 
    diaryEntryCalories: 400, diaryEntryCarbs: 150, 
    diaryEntryProtein: 20, diaryEntryFat: 40, 
    username: 'johnsmith', mealId: 2, diaryEntryDate: new Date(2020, 1, 26) }
]