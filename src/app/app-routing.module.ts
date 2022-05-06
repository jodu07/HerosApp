import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';


const routes: Routes = [  
  { path: '404', component: ErrorPageComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  
  imports: [
    // forRoot porque son las rutas principales
    RouterModule.forRoot(routes)
  ],
  exports: [
    //para que este a disposición de toda la aplicación
    RouterModule
  ]
})
export class AppRoutingModule { }
