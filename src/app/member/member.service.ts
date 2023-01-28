import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from '../common/system.service';
import { User } from '../user/user.class';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  baseurl: string = `${this.sys.baseurl}/users`;

  constructor(
    private sys: SystemService,
    private http: HttpClient
  ) { }

  list(): Observable<User[]> {
    return this.http.get(`${this.baseurl}`) as Observable<User[]>;
  }
  get(id: number): Observable<User> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<User>;
  }
  create(user: User): Observable<User> {
    return this.http.post(`${this.baseurl}`, user) as Observable<User>;
  }

  change():

  remove(): 

}
