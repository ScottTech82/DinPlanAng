import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal.class';

@Component({
  selector: 'app-meal-create',
  templateUrl: './meal-create.component.html',
  styleUrls: ['./meal-create.component.css']
})
export class MealCreateComponent implements OnInit {

  pageTitle: string = "Dinner Planner!";
  subTitle: string = "Add New Meal";
  meal: Meal = new Meal;

  constructor() { }

  create(): void {
    
  }

  ngOnInit(): void {
  }

}
