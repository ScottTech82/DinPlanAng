import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  pageTitle: string = "Dinner Planner!";
  subTitle: string = " - Member Update -";
  user!: User;
  showVerifBtn: boolean = false;
 

  constructor(
    private route: ActivatedRoute,
    private usersvc: UserService,
    private router: Router,
  ) { }

  update(): void {
    this.usersvc.change(this.user).subscribe({
      next: (res) => {
        this.router.navigateByUrl("user/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  remove(): void {
    this.showVerifBtn = !this.showVerifBtn;
  }

  verifyRemove(): void {
    this.usersvc.remove(this.user.id).subscribe({
      next: (res) => {
        console.debug("The User was deleted!");
        this.router.navigateByUrl("/user/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }


  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.usersvc.get(id).subscribe({
      next: (res) => {
        this.user = res;
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
