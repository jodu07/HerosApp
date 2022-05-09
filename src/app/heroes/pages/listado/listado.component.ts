import { Component, OnInit } from '@angular/core';

import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  listHeroes: Heroe[]=[];

  listNombresheroes: string[]=[];

  constructor(private _heroesService: HeroesService
              ) { }


  obtenerheroes(){
    this._heroesService.getHeroes()
    .subscribe( dataHeroes  => 
    
     // console.log(dataHeroes)

     dataHeroes.forEach(element => {
      this.listNombresheroes.push(element.superhero) ;
     })     
     
    )
    console.log('lista', this.listNombresheroes);
    
  }

  ngOnInit(): void {

    this.obtenerheroes();
  }

}
