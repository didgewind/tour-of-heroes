import { HeroesIntService } from './../../services/heroes-int.service';
import { HeroesAdapterService } from './../../services/heroes-adapter.service';
import { Hero } from './../../model/hero';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  private heroesService: HeroesIntService;
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    heroesService: HeroesAdapterService,
    private location: Location
  ) {
    this.heroesService = heroesService;
   }

  ngOnInit(): void {
    this.getHero();
  }

  private getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroesService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroesService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

}
