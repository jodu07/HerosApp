import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics ,
    alt_img: ''
  }

  constructor( private _heroesService: HeroesService) { }

  saveHero(){

    if( this.heroe.superhero.trim().length === 0){
      return;
    }

    this._heroesService.addHero(this.heroe)
      .subscribe(heroe => console.log(heroe))       
  }

  ngOnInit(): void {
  }

}
