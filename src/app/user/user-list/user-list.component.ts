import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  pageTitle: string = "Dinner Plan";
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
