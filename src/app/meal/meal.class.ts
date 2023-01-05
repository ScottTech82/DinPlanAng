import { User } from "../user/user.class";

export class Meal {
    id: number = 0;
    name: string = "";
    type: string = "";
    description: string = "";
    cookType: string = "";
    cookTime: number = 0;

    userid!: number;
    user!: User;
}