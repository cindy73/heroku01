import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './buscar/buscar.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

const routes: Routes = [
  {path: '', redirectTo: 'peliculas/estreno', pathMatch: 'full'},
  {path:'peliculas/estreno', component:HomeComponent},
  {path:'peliculas/descripcion/:id', component:DetailComponent},
  {path:'peliculas/buscar/:nombre', component:BuscarComponent},
  {path:'peliculas/mejor-valoradas', component:NosotrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
