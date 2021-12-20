import { Component, Input, OnInit } from '@angular/core';
import { MoviesdbService } from '../servicios/moviesdb.service';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  titulo:any ;
  topRated:any;
  estado:number=0;
  constructor(private activatedRoute:ActivatedRoute,private moviesdbService:MoviesdbService) {
    this.titulo = this.activatedRoute.snapshot.paramMap.get('nombre');
   }
  
  ngOnInit() {
    this.serachMovies(this.titulo);
  }
 
   serachMovies(nombre:string) {
    this.moviesdbService.searchMovies$(this.titulo)
    .subscribe(data=>{
      this.topRated=data;
      this.estado=this.topRated.results.length;
     
    })
  }
}
