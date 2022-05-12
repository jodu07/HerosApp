import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  api = 'http://localhost:3000/';

  getHeroes():Observable<Heroe[]>{
    //const url = `${this.api}/heroes`;
    return this.http.get<Heroe[]>('http://localhost:3000/heroes');
  }

  getHeroe(id: string):Observable<Heroe>{
    const url= `${this.api}heroes/${id}`
    return this.http.get<Heroe>((url));
  }


}
