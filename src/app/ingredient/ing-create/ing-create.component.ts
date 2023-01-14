import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Meal } from 'src/app/meal/meal.class';
import { Ingredient } from '../ingredient.class';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-ing-create',
  templateUrl: './ing-create.component.html',
  styleUrls: ['./ing-create.component.css']
})
export class IngCreateComponent implements OnInit {

  pageTitle: string = "Dinner Planner!";
  subTitle: string = "New Ingredient";
  ing: Ingredient = new Ingredient;
  meal!: Meal;

  constructor(
    private ingsvc: IngredientService,
    private router: Router,
    private sys: SystemService
  ) { }

  add(): void {
    let id = this.meal.id;
    this.ing.mealId = id;
    this.ingsvc.create(this.ing).subscribe({
      next: (res) => {
        this.router.navigateByUrl(`/meal/details/${this.meal.id}`);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.meal = this.sys.meal;
  }

}
