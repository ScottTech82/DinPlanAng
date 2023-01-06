import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from '../common/system.service';
import { User } from '../user/user.class';
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

  create(user: User): Observable<Meal> {
    return this.http.post(`${this.baseurl}`, user) as Observable<Meal>;
  }

  change(user: User): Observable<any> {
    
  }

  delete(): 
}
