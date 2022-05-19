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
  heroeSeleccionado: Heroe | undefined;
  textoVacio: string = ''
 

  constructor(private _heroesService: HeroesService) { }

  buscando(){
    this._heroesService.getSugerencias(this.termino.trim()) // trim() para quitar los espacios antes y despues del texto
       .subscribe( heroes => this.heroes = heroes );      
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent ){

    if(!event.option.value){
      this.heroeSeleccionado = undefined;
      this.textoVacio = 'vacio';
      return;
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
