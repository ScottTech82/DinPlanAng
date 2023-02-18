import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from '../common/system.service';
import { User } from '../user/user.class';
import { Member } from './member.class';

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
  create(member: Member): Observable<User> {
    return this.http.post(`${this.baseurl}`, member) as Observable<User>;
  }
  change(member: Member): Observable<any> {
    return this.http.put(`${this.baseurl}/${member.id}`, member) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  } 

}
