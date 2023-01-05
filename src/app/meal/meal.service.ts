import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from '../common/system.service';
import { Meal } from './meal.class';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  baseurl: string = `${this.sys.baseurl}/meals`;

  constructor(
    private sys: SystemService,
    private http: HttpClient,
  ) { }

  list(): Observable<Meal[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Meal[]>;
  }
  get(id: number): Observable<Meal> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Meal>;
  }

  create

  change

  delete(): 
}
