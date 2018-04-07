import { HeroesRestService } from './heroes-rest.service';
import { MessagesService } from './messages.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HeroesIntService } from './heroes-int.service';
import { Hero } from './../model/hero';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroesAdapterService implements HeroesIntService {

  constructor(private heroesService: HeroesRestService, private messageService: MessagesService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroesService: Héroes recuperados');
    return this.heroesService.getHeroes();
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return this.heroesService.getHero(id);
  }
}
