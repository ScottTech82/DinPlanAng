import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../member.class';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-create',
  templateUrl: './member-create.component.html',
  styleUrls: ['./member-create.component.css']
})
export class MemberCreateComponent implements OnInit {


  pageTitle: string = "Dinner Plan";
  subTitle: string = "- New Member -";
  member: Member = new Member;

  constructor(
    private memsvc: MemberService,
    private router: Router
  ) { }

  create(): void {

  }

  cancel(): void {
    
  }

  ngOnInit(): void {
  }

}
