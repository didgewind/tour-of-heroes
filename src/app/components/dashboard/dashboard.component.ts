import { HeroesAdapterService } from './../../services/heroes-adapter.service';
import { HeroesIntService } from './../../services/heroes-int.service';
import { Hero } from './../../model/hero';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  private heroesService: HeroesIntService;
  heroes: Hero[] = [];

  constructor(heroesService: HeroesAdapterService) {
    this.heroesService = heroesService;
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroesService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
