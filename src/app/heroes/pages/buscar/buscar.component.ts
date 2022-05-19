import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
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
  heroeSeleccionado!: Heroe;
  texto: string = ''
 

  constructor(private _heroesService: HeroesService) { }

  buscando(){
    this._heroesService.getSugerencias(this.termino)
       .subscribe( heroes => this.heroes = heroes );     
      
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent ){

    if(event.option.value === ''){
      this.texto = 'vacio'
    }else{
      const heroe: Heroe = event.option.value;  
      console.log(heroe);
      this.termino = heroe.superhero;    
    
      this._heroesService.getHeroeById(heroe.id!)
       .subscribe( heroe => { this.heroeSeleccionado = heroe;
       // console.log('heroe: ', this.heroeSeleccionado); 
       });   
    } 
    }

  ngOnInit(): void {
  }

}
