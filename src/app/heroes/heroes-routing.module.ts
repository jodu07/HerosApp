import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { ListadoComponent } from './pages/listado/listado.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'agregar', component: AgregarComponent
      },
      {
        path: 'editar:id', component: AgregarComponent
      },
      {
        path: 'buscar', component: BuscarComponent
      },
      {
        path: ':id', component: HeroeComponent
      },
      {
        path: 'listado', component: ListadoComponent
      },
      {
        path: '**', redirectTo: 'listado'
      },
    ]
  }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
