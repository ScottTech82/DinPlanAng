import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { User } from 'src/app/user/user.class';
import { Menu } from './menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() menu!: Menu;

  menus: Menu[] = [

    new Menu("Meals", "/meal/list"),
    new Menu("Family Members", "/user/list"),
    new Menu("Ingredients", "/ing/list"),
   

    
  ];

  user!: User;  //if using to show the logged in user
  seemenu: boolean = false;

  collapseMenu(): void {
    this.seemenu = !this.seemenu;
  }



  constructor(
    private sys: SystemService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = this.sys.user;
  }

}
