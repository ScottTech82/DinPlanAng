import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from '../common/system.service';
import { Member } from './member.class';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  baseurl: string = `${this.sys.baseurl}/members`;

  constructor(
    private sys: SystemService,
    private http: HttpClient
  ) { }

  list(): Observable<Member[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Member[]>;
  }
  get(id: number): Observable<Member> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Member>;
  }
  create(member: Member): Observable<Member> {
    return this.http.post(`${this.baseurl}`, member) as Observable<Member>;
  }
  change(member: Member): Observable<any> {
    return this.http.put(`${this.baseurl}/${member.id}`, member) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  } 

}
