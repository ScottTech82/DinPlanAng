import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppInitService } from '../app-init.service';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  baseurl: string = this.appInit.config.baseurl;

  user: any = null;

  constructor(
    private router: Router,
    private appInit: AppInitService
  ) { }
}
