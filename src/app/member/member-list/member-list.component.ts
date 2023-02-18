import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Member } from '../member.class';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  
  members: Member[] = [];
  pageTitle: string = "Dinner Plan";
  subTitle: string = "- Family Members -";


  constructor(
    private sys: SystemService,
    private memsvc: MemberService,
    private router: Router

  ) { }

  details(id: number): void {
    this.router.navigateByUrl(`/member/update/${id}`);
  }
  create(): void {
    this.router.navigateByUrl("/member/create");
  }

  ngOnInit(): void {
    this.memsvc.list().subscribe({
      next: (res) => {
        this.members = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}

