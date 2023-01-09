import { Ingredient } from "../ingredient/ingredient.class";
import { User } from "../user/user.class";

export class Meal {
    id: number = 0;
    name: string = "";
    type: string = "";
    description: string = "";
    cookType: string = "";
    cookTemp: string = "";
    cookTime: string = "";

    ingredients!: Ingredient[];
    
    userid!: number;
    user!: User;
}