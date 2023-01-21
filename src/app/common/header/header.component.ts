import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() pageTitle: string = "";
  @Input() subTitle: string = "";

  constructor(
    private router: Router,
  ) { }

  home(): void {
    this.router.navigateByUrl("/meal/list");
  }
  ngOnInit(): void {
  }

}
