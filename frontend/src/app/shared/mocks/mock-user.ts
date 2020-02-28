import { User } from '../models/user';

export const MOCK_USER: User = {
    username: 'johnsmith',
    firstName: 'John',
    lastName: 'Smith',
    caloriesGoal: 7500,
    caloriesCycleStart: new Date(2020, 2, 25),
    caloriesCycleDuration: 7
}