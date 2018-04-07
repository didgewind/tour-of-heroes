import { environment } from './../../environments/environment';
import { Hero } from './../model/hero';
import { Observable } from 'rxjs/Observable';
import { HeroesIntService } from './heroes-int.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeroesRestService implements HeroesIntService {

  private heroesRestUrl = environment.heroesRestUrl;

  constructor( private http: HttpClient ) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesRestUrl)
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesRestUrl}/${id}`;
    return this.http.get<Hero>(url);
  }
}
