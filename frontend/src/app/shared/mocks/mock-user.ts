import { User } from '../models/user';

export const MOCK_USER: User = {
    'username': 'johnsmith',
    'firstName': 'John',
    'lastName': 'Smith',
    'caloriesGoal': 7500,
    'caloriesCycleStart': new Date('2020-02-25T00:00:00'),
    'caloriesCycleDuration': 7
}