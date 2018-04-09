import { HeroesRestService } from './heroes-rest.service';
import { MessagesService } from './messages.service';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { HeroesIntService } from './heroes-int.service';
import { Hero } from './../model/hero';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroesAdapterService implements HeroesIntService {

  constructor(private heroesService: HeroesRestService, private messageService: MessagesService) { }

  getHeroes(): Observable<Hero[]> {
    return this.heroesService.getHeroes()
      .pipe(
        tap(heroes => this.log('Héroes recuperados')),
        catchError(this.handleError('getHeroes', []))
      );
  }

  getHero(id: number): Observable<Hero> {
    return this.heroesService.getHero(id)
      .pipe(
        tap(_ => this.log(`Héroe con id=${id} recuperado`)),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
  }

  updateHero (hero: Hero): Observable<any> {
    return this.heroesService.updateHero(hero)
      .pipe(
        tap(_ => this.log(`héroe con id=${hero.id} actualizado`)),
        catchError(this.handleError<any>('updateHero'))
      )
  }

  private log(mensaje: string): void {
    this.messageService.add(mensaje);
    console.log(mensaje);
  }

  /* Devuelve una función que es la que invoca catchError */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
