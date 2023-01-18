import { Ingredient } from "../ingredient/ingredient.class";
import { User } from "../user/user.class";

export class Meal {
    id: number = 0;
    name: string = "";
    type: string = "";
    cookType: string = "";
    cookTemp: string = "";
    cookTime: string = "";
    cookNotes: string = "";

    ingredients!: Ingredient[];
    
    userid!: number;
    user!: User;
}