import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';

  heroes: Heroe[]=[];



  constructor(private _heroesService: HeroesService) { }

  buscando(){
    this._heroesService.buscarHeroePorTermino(this.termino)
       .subscribe( heroe => console.log(heroe) );
  }

  ngOnInit(): void {
  }

}
