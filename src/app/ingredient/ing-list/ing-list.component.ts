import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ingredient } from '../ingredient.class';

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

  ) { }

  details(id:number): void {
    this.router.navigateByUrl("/ingredient/update");
  }

  ngOnInit(): void {
  }

}
