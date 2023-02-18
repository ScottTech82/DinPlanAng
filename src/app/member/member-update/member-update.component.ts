import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal } from 'src/app/meal/meal.class';
import { MealService } from 'src/app/meal/meal.service';
import { Member } from '../member.class';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-update',
  templateUrl: './member-update.component.html',
  styleUrls: ['./member-update.component.css']
})
export class MemberUpdateComponent implements OnInit {

  pageTitle: string = "Dinner Plan";
  subTitle: string = "- Member Update -";
  member!: Member;
  showVerifBtn: boolean = false;
  meals: Meal[] = [];

  constructor(
    private route: ActivatedRoute,
    private memsvc: MemberService,
    private router: Router,
    private mealsvc: MealService
  ) { }

  update(): void {
    this.memsvc.change(this.member).subscribe({
      next: (res) => {
        this.router.navigateByUrl("member/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  remove(): void {
    this.showVerifBtn = !this.showVerifBtn;
  }
  cancel(): void {
    this.router.navigateByUrl("member/list");
  }

  verifyRemove(): void {
    this.memsvc.remove(this.member.id).subscribe({
      next: (res) => {
        console.debug("The User was deleted!");
        this.router.navigateByUrl("/member/list");
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
    this.memsvc.get(id).subscribe({
      next: (res) => {
        this.member = res;
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
    });
  }
}
