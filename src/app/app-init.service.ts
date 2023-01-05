import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  config: any;

  constructor(
    private http: HttpClient
  ) { }

  getSettings(): Promise<any> {
    return this.http.get("./assets/config.json").toPromise().then(
      (data:any) => {
        this.config = data;
      }
    )
  }

  
}
