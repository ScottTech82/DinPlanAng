import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../menu/menu.class';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css']
})
export class MenuitemComponent implements OnInit {

  @Input() menu!: Menu;

  constructor() { }

  ngOnInit(): void {
  }

}
