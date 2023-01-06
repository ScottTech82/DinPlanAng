import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal.class';

@Component({
  selector: 'app-meal-update',
  templateUrl: './meal-update.component.html',
  styleUrls: ['./meal-update.component.css']
})
export class MealUpdateComponent implements OnInit {

  meal!: Meal;
  pageTitle: string = "Dinner Planner!";
  subTitle: string = "Update Meal";

  constructor() { }

  update(): void {

  }

  remove(): void {
    
  }

  ngOnInit(): void {
  }

}
