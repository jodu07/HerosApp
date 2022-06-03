import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
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

  idHeroe: string = '';

  constructor( private _heroesService: HeroesService,
               private activatedRoute: ActivatedRoute) { }

  saveHero(){
    if( this.heroe.superhero.trim().length === 0){
      return;
    }
    this._heroesService.addHero(this.heroe)
      .subscribe(heroe => console.log(heroe))       
  }

  actualizarHeroe(heroe: Heroe){
    this._heroesService.updateHeroe(this.idHeroe, this.heroe);
    
   
  }



  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( id:string  => {        
        this.idHeroe = id;
        this._heroesService.getHeroeById(this.idHeroe);

       } ),
      tap(console.log)
    )
    .subscribe( heroe => this.heroe = heroe);

    
  }

}
