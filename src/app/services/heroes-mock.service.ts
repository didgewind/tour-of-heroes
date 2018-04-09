import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HeroesIntService } from './heroes-int.service';
import { Hero } from './../model/hero';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroesMockService implements HeroesIntService {

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

  private nextId = 21; // Para asignar id's a héroes nuevos

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(this.heroes);
  }

  getHero(id: number): Observable<Hero> {
    return of(this.heroes.find(hero => hero.id === id));
  }

  /*
    Todo esto en realidad no hace falta porque al modificar
    un componente un objeto Hero se modifica también en este
    array porque son el mismo objeto, pero está bien
    dejarlo aquí por si queremos simularlo mejor clonando
    los objetos al intercambiarlos con otras capas
  */
  updateHero (updatedHero: Hero): Observable<Hero> {
    const foundHero = this.heroes.find((oldHero, index) => {
      if (oldHero.id === updatedHero.id) {
        this.heroes[index] = updatedHero;
        return true;
      }
    });
    // TODO: comprobar si foundHero es undefined y entonces retornar error
    return of(foundHero);
  }

  /*
    No hacemos nada (sólo asignar id al héroe) porque ya añadimos el héroe
    al array de héroes en el componente.
  */
  addHero(newHero: Hero): Observable<Hero> {
    newHero.id = this.nextId++;
    return of(newHero);
  }

  deleteHero(heroToDelete: Hero): Observable<Hero> {
    this.heroes = this.heroes.filter(h => h !== heroToDelete);
    return of(heroToDelete);
  }
}
