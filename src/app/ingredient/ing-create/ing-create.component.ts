import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  

  constructor(
    private ingsvc: IngredientService,
    private router: Router,
  ) { }

  add(): void {
    this.ingsvc.create(this.ing).subscribe({
      next: (res) => {
        this.router.navigateByUrl("/ing/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
  }

}
