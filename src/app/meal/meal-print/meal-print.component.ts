import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Meal } from '../meal.class';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-meal-print',
  templateUrl: './meal-print.component.html',
  styleUrls: ['./meal-print.component.css']
})
export class MealPrintComponent implements OnInit {

  pageTitle: string = "Dinner Plan";
  subTitle: string = "Meal Details";
  meal!: Meal;

  constructor(
    private mealsvc: MealService,
    private route: ActivatedRoute,
    private router: Router,
    private sys: SystemService
  ) { }

  print(): void {
    window.print();
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
