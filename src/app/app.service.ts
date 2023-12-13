import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISession } from './entity/Session';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseUrl = `https://localhost:7145/api/Session`;
  constructor(private http: HttpClient) { }
  getSession(){
    return this.http.get<ISession[]>(this.baseUrl)
  }

}
