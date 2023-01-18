import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
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
    private sys: SystemService

  ) { }

  update(id: number): void {
    this.router.navigateByUrl(`/meal/update/${id}`);
  }
  updateIng(id:number): void {
    this.router.navigateByUrl(`/ing/update/${id}`);
  }
  print(): void {
    /*window.print();*/
    window.open(`./meal/print/${this.meal.id}`, '_blank');
    window.focus();
    
    /* this.router.navigateByUrl("/meal/print");*/
    
    /*
    var divToPrint = document.getElementById('meal-detail');
    var newWin = window.open('', 'Print-Window');
    newWin?.document.open();
    newWin?.document.write('<html><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" media="print"\><body onload="window.print()">' + divToPrint?.innerHTML + '</body></html>');
    newWin?.document.close();
    */
  }

  addIng(): void {
    this.sys.meal = this.meal;
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
