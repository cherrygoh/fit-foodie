export interface DiaryEntry {

    diaryEntryId: number;
    diaryEntryName: string;
    diaryEntryCalories: number;
    diaryEntryProtein?: number;
    diaryEntryCarbs?: number;
    diaryEntryFat?: number;
    mealId: number;
    diaryEntryDate: Date;
    username: string;

}