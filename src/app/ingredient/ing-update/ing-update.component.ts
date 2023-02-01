import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Meal } from 'src/app/meal/meal.class';
import { MealService } from 'src/app/meal/meal.service';
import { Ingredient } from '../ingredient.class';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-ing-update',
  templateUrl: './ing-update.component.html',
  styleUrls: ['./ing-update.component.css']
})
export class IngUpdateComponent implements OnInit {

  pageTitle: string = "Dinner Plan";
  subTitle: string = "- Update Ingredient -";
  showVerifBtn: boolean = false;
  ing!: Ingredient;
  meal!: Meal;
  meals: Meal[] = [];

  constructor(
    private ingsvc: IngredientService,
    private route: ActivatedRoute,
    private router: Router,
    private sys: SystemService,
    private mealsvc: MealService
  ) { }

  update(): void {
    this.ingsvc.change(this.ing).subscribe({
      next: (res) => {
        this.router.navigateByUrl(`/meal/details/${this.ing.mealId}`);
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
    this.ingsvc.remove(this.ing.id).subscribe({
      next: (res) => {
        this.router.navigateByUrl(`/meal/details/${this.ing.mealId}`);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  clickAnyWhere(): void {
    if(this.showVerifBtn === true) {
      this.showVerifBtn = false;
    }
  }

  cancel(): void {
    this.router.navigateByUrl(`/ing/list`);
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.ingsvc.get(id).subscribe({
      next: (res) => {
        this.ing = res;
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
    this.mealsvc.list().subscribe({
      next: (res) => {
        this.meals = res;
      }, 
      error: (err) => {
        console.error(err);
      }
    })
  }

}
