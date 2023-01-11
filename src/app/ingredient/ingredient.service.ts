import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from '../common/system.service';
import { Ingredient } from './ingredient.class';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  baseurl: string = `${this.sys.baseurl}/ingredients`;

  constructor(
    private http: HttpClient,
    private sys: SystemService
  ) { }


  list(): Observable<Ingredient[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Ingredient[]>;
  }
  get(id: number): Observable<Ingredient> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Ingredient>;
  }
  create()

}
