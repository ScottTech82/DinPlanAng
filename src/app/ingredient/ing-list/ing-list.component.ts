import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Ingredient } from '../ingredient.class';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-ing-list',
  templateUrl: './ing-list.component.html',
  styleUrls: ['./ing-list.component.css']
})
export class IngListComponent implements OnInit {

  pageTitle: string = "Dinner Planner!";
  subTitle: string = " - Ingredient List -";
  ings: Ingredient[] = [];

  constructor(
    private router: Router,
    private ingsvc: IngredientService,
    private sys: SystemService
  ) { }

  details(id:number): void {
    this.sys.meal = 
    this.router.navigateByUrl(`/ing/update/${id}`);
  }

  ngOnInit(): void {
    this.ingsvc.list().subscribe({
      next: (res) => {
        this.ings = res;
        for(let x of this.ings) {
          x.mealName = x.meal.name;
        }
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
