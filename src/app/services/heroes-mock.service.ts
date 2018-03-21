import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HeroesInt } from './heroes-int.service';
import { Hero } from './../model/hero';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroesMockService implements HeroesInt {

  private heroes: Hero[] = [
    new Hero(11, 'Mr. Nice' ),
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(this.heroes);
  }
}
