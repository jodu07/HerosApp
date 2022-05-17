import { Component, OnInit } from '@angular/core';

import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: []
})
export class ListadoComponent implements OnInit {

  listHeroes: Heroe[]=[];

  constructor(private _heroesService: HeroesService
              ) { }


  obtenerheroes(){
    this._heroesService.getHeroes()
    .subscribe(  dataHeroes => this.listHeroes = dataHeroes);    
  }

  ngOnInit(): void {
    this.obtenerheroes();    
  }
}


/* dataHeroes.forEach(element => {
      this.listNombresheroes.push(element.superhero) ;
     })
     
     this.listHeroes.push(dataHeroes[0])
     
    )
    console.log('lista', this.listNombresheroes);


    */