import { Hero } from './../model/hero';
import { Observable } from 'rxjs/Observable';

export interface HeroesIntService {

    getHeroes(): Observable<Hero[]>;
    getHero(id: number): Observable<Hero>;
    updateHero (hero: Hero): Observable<any>;
}
