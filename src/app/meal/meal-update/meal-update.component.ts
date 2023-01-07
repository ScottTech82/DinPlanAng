import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal } from '../meal.class';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-meal-update',
  templateUrl: './meal-update.component.html',
  styleUrls: ['./meal-update.component.css']
})
export class MealUpdateComponent implements OnInit {

  meal!: Meal;
  pageTitle: string = "Dinner Planner!";
  subTitle: string = "Update Meal";
  showVerifBtn: boolean = false;

  constructor(
    private mealsvc: MealService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  update(): void {
    this.mealsvc.change(this.meal).subscribe({
      next: (res) => {
        this.router.navigateByUrl("/meal/list");
      },
      error: (err) => {
        console.error(err);
      }
    })

  }

  remove(): void {
    this.showVerifBtn = !this.showVerifBtn;

  }
  verifyRemove(): void {
    this.mealsvc.remove(this.meal.id).subscribe({
      next: (res) => {
        this.router.navigateByUrl("/meal/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
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
