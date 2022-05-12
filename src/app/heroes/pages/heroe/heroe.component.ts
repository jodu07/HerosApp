import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;  
  
  idHeroe: string = '';

  constructor(private _heroesService: HeroesService,
              private activatedRoute: ActivatedRoute) { }

              
 
  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe( ({id}) => {
      console.log('id', id);
       this.idHeroe = id;
      console.log(this.idHeroe);

      this._heroesService.getHeroe(this.idHeroe)
     .subscribe( heroe =>{
      console.log(heroe);
      this.heroe = heroe;

     }
      

    )    
  }   
    )
  }

}
