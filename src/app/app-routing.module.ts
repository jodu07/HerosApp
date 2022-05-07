import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthRoutingModule } from './auth/auth-routing.module';


const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)},  
  { path: '404', component: ErrorPageComponent },
  { path: '**', redirectTo: '404'},
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
