import { Hero } from './../model/hero';
import { Observable } from 'rxjs/Observable';

export interface HeroesInt {

    getHeroes(): Observable<Hero[]>;

}
