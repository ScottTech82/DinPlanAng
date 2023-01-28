import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  
  users: User[] = [];
  pageTitle: string = "Dinner Planner!";
  subTitle: string = "- Member List -";


  constructor(
    private sys: SystemService,
    private usersvc: UserService,
    private router: Router

  ) { }

  details(id: number): void {
    this.router.navigateByUrl(`/user/update/${id}`);
  }
  create(): void {
    this.router.navigateByUrl("/user/create");
  }

  ngOnInit(): void {
    this.usersvc.list().subscribe({
      next: (res) => {
        this.users = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}

