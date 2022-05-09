import { Component, OnInit } from '@angular/core';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  listHeroes: any[]=[];

  constructor(private _heroesService: HeroesService
              ) { }


  obtenerheroes(){
    this._heroesService.getHeroes()
    .subscribe( (dataHeroes: any) => 
    
    console.log(dataHeroes)

     //this.listHeroes = <any>dataHeroes;  


    )
  }

  ngOnInit(): void {

    this.obtenerheroes();
  }

}
