import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal } from '../meal.class';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {

  pageTitle: string = "Dinner Planner!";
  subTitle: string = " - Meal List -";
  meals: Meal[] = [];

  constructor(
    private mealsvc: MealService,
    private router: Router,
  ) { }

  details(id:number): void {
    this.router.navigateByUrl(`/meal/details/${id}`);
  }

  ngOnInit(): void {
    this.mealsvc.list().subscribe({
      next: (res) => {
        this.meals = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
