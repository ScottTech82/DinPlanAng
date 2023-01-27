import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  pageTitle: string = "Dinner Planner!";
  subTitle: string = "- New Member -";
  user: User = new User;

  constructor(
    private usersvc: UserService,
    private router: Router
  ) { }

  create(): void {
    this.usersvc.create(this.user).subscribe({
      next: (res) => {
        this.router.navigateByUrl("/user/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  cancel(): void {
    this.router.navigateByUrl("/user/list");
  }

  ngOnInit(): void {

  }

}
