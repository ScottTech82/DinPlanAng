import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/app/member/member.class';
import { MemberService } from 'src/app/member/member.service';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { Meal } from '../meal.class';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-meal-create',
  templateUrl: './meal-create.component.html',
  styleUrls: ['./meal-create.component.css']
})
export class MealCreateComponent implements OnInit {

  pageTitle: string = "Dinner Plan";
  subTitle: string = "- New Meal -";
  meal: Meal = new Meal;
  user: User[] = [];
  member: Member[] = [];

  constructor(
    private mealsvc: MealService,
    private router: Router,
    private usersvc: UserService,
    private memsvc: MemberService,
  ) { }

  add(): void {
    this.mealsvc.create(this.meal).subscribe({
      next: (res) => {
        this.router.navigateByUrl("/meal/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
    
  }
  cancel(): void {
    this.router.navigateByUrl("/meal/list");
  }

  ngOnInit(): void {
    this.memsvc.list().subscribe({
      next: (res) => {
        this.member = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
