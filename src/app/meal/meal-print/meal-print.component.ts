import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-print',
  templateUrl: './meal-print.component.html',
  styleUrls: ['./meal-print.component.css']
})
export class MealPrintComponent implements OnInit {

  constructor(
    
  ) { }

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
