import { HeroesInt } from './../../services/heroes-int.service';
import { HeroesMockService } from './../../services/heroes-mock.service';
import { Hero } from './../../model/hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  private heroesService: HeroesInt;

  heroes: Hero[];

  selectedHero: Hero;

  constructor(heroesService: HeroesMockService) {
    this.heroesService = heroesService;
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroesService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
