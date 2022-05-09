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

  constructor(private _heroesService: HeroesService
              ) { }


  obtenerheroes(){
    this._heroesService.getHeroes()
    .subscribe( (dataHeroes: any) => 
    
     // console.log(dataHeroes)
     this.listHeroes.push(dataHeroes)
     
    )
    console.log(this.listHeroes);
  }

  ngOnInit(): void {

    this.obtenerheroes();
  }

}
