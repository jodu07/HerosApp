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

  constructor(private _heroesService: HeroesService,
              private activatedRoute: ActivatedRoute) { }

              
 
  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe( ({idHeroe}) =>{

      this._heroesService.getHeroe(idHeroe)
     .subscribe( heroe =>
      this.heroe = heroe

    )}
    
    )
  }

}
