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

  constructor(heroesService: HeroesMockService) {
    this.heroesService = heroesService;
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.heroesService.getHeroes();
  }

}
