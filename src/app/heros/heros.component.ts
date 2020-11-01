import { HEROES } from './../mock-heros';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
