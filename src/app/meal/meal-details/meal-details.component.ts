import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal } from '../meal.class';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css']
})
export class MealDetailsComponent implements OnInit {

  pageTitle: string = "Dinner Planner!";
  subTitle: string = "Meal Details";
  meal!: Meal;

  constructor(
    private mealsvc: MealService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  update(id: number): void {
    this.router.navigateByUrl(`/meal/update/${id}`);
  }

  addIng(): void {
    this.router.navigateByUrl("/ing/create");
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.mealsvc.get(id).subscribe({
      next: (res) => {
        this.meal = res;
      },
      error: (err) => {
        if(err.status === 404) {
          this.router.navigateByUrl("/misc/e404");
        }
        else {
          console.error(err);
        }
      }
    });
  }

}
