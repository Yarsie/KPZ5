import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFilm } from './entity/Film';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  baseUrl = `https://localhost:7145/api/Film`;
  constructor(private http: HttpClient) { }
  getFilm(){
    return this.http.get<IFilm[]>(this.baseUrl)
  }

}
