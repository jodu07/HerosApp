import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  api = 'localhost:3000';

  getHeroes():Observable<any>{
    //const url = `${this.api}/heroes`;
    return this.http.get<any>('http://localhost:3000/heroes');
  }


}
