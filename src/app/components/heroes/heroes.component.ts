import { HeroesAdapterService } from './../../services/heroes-adapter.service';
import { HeroesIntService } from './../../services/heroes-int.service';
import { Hero } from './../../model/hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  private heroesService: HeroesIntService;

  heroes: Hero[];

  constructor(heroesService: HeroesAdapterService) {
    this.heroesService = heroesService;
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroesService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
