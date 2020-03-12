import { DiaryEntry } from '../models/entry';

export const MOCK_ENTRIES: DiaryEntry[] = [
    { diaryEntryId: 1, diaryEntryName: 'Curry', 
    diaryEntryCalories: 600, diaryEntryCarbs: 100, 
    diaryEntryProtein: 60, diaryEntryFat: 60, 
    username: 'johnsmith', mealOrder: 1, diaryEntryDate: new Date()},

    { diaryEntryId: 2, diaryEntryName: 'Chicken Nuggets', 
    diaryEntryCalories: 400, diaryEntryCarbs: 150, 
    diaryEntryProtein: 20, diaryEntryFat: 40, 
    username: 'johnsmith', mealOrder: 2, diaryEntryDate: new Date(),},

    { diaryEntryId: 3, diaryEntryName: 'Pasta', 
    diaryEntryCalories: 500, diaryEntryCarbs: 300, 
    diaryEntryProtein: 20, diaryEntryFat: 40, 
    username: 'johnsmith', mealOrder: 2, diaryEntryDate: new Date() }
]