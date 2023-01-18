import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from '../ingredient.class';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-ing-update',
  templateUrl: './ing-update.component.html',
  styleUrls: ['./ing-update.component.css']
})
export class IngUpdateComponent implements OnInit {

  pageTitle: string = "Dinner Planner!";
  subTitle: string = "Update Ingredient";
  showVerifBtn: boolean = false;
  ing!: Ingredient;

  constructor(
    private ingsvc: IngredientService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  update(): void {
    this.ingsvc.change(this.ing).subscribe({
      next: (res) => {
        this.router.navigateByUrl(`/meal/detail/${this.ing.mealId}`);
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
        this.router.navigateByUrl(`/meal/detail/${this.ing.mealId}`);
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
  }

}
