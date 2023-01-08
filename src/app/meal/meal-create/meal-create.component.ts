import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal } from '../meal.class';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-meal-create',
  templateUrl: './meal-create.component.html',
  styleUrls: ['./meal-create.component.css']
})
export class MealCreateComponent implements OnInit {

  pageTitle: string = "Dinner Planner!";
  subTitle: string = "New Meal";
  meal: Meal = new Meal;

  constructor(
    private mealsvc: MealService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  add(): void {
    this.mealsvc.create(this.meal).subscribe({
      next: (res) => {
        this.router.navigateByUrl("/meal/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
    
  }

  ngOnInit(): void {
  }

}
