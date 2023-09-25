import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { ContenidoinicioComponent } from '../inicio/pages/contenidoinicio/contenidoinicio.component';

const routes: Routes = [
  { path: 'inicio', component: ContenidoinicioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
