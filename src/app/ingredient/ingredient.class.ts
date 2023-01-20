import { Meal } from "../meal/meal.class";

export class Ingredient {
    id: number = 0;
    name: string = "";
    amount: string = "";
    notes: string = "";

    mealId!: number;
    meal!: Meal;
    
    mealName: string = "";
}