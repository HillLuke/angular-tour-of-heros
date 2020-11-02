import { MessageService } from '../../services/message.service';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../interfaces/hero';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    // .subscribe is an async function tha passes the result to a callback
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

}
