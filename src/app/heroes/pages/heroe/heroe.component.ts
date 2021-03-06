import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators'; 

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
     img {
       width: 100%;
       border-radius: 5px
     }
  `
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;  
  
  idHeroe: string = '';

  constructor(private _heroesService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }              
 
  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this._heroesService.getHeroeById(id)),
      tap(console.log)
    )
    .subscribe( heroe => this.heroe = heroe);

   /* this.activatedRoute.params
     .subscribe( ({id}) => {
      console.log('id', id);
       this.idHeroe = id;
      console.log(this.idHeroe);

      this._heroesService.getHeroeById(this.idHeroe)
     .subscribe( heroe =>{
      console.log(heroe);
      this.heroe = heroe;
     }
    )    
  }   
    )*/
  }

  regresar(){
    this.router.navigate(['./heroes/listado']);
  }
}


