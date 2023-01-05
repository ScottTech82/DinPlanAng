import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal.class';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {

  pageTitle: string = "Dinner Planner!";
  subTitle: string = " - Meal List -";
  meals: Meal[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
