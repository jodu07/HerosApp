import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroe.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  api = 'http://localhost:3000/heroes';

  getHeroes():Observable<Heroe[]>{
    const url = `${this.baseUrl}/heroes`;
    return this.http.get<Heroe[]>(url);
  }

  getHeroeById(id: string):Observable<Heroe>{
    const url= `${this.baseUrl}/heroes/${id}`
    return this.http.get<Heroe>((url));
  }


}
