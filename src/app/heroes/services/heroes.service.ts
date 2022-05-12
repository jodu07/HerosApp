import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  api = 'http://localhost:3000/heroes';

  getHeroes():Observable<Heroe[]>{
    const url = `${this.api}/`;
    return this.http.get<Heroe[]>(url);
  }

  getHeroeById(id: string):Observable<Heroe>{
    const url= `${this.api}/${id}`
    return this.http.get<Heroe>((url));
  }


}
