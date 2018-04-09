import { Hero } from './../model/hero';
import { Observable } from 'rxjs/Observable';

export interface HeroesIntService {

    getHeroes(): Observable<Hero[]>;
    getHero(id: number): Observable<Hero>;
    updateHero(updatedHero: Hero): Observable<Hero>;
    addHero(newHero: Hero): Observable<Hero>;
    deleteHero(heroToDelete: Hero): Observable<Hero>;
}
