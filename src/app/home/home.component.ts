import { Component, Input, OnInit } from '@angular/core';
import { MoviesdbService } from '../servicios/moviesdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pages:number=1;
 peliculas: any;
  constructor(private moviesdbService:MoviesdbService) { 
    //
  }
 
  ngOnInit(): void {
    this.getList(1);
    //this.peliculas.push(this.peliculas);
  }

  getList(page:number): void {
    this.moviesdbService.getListMovies(page)
    .then(data=>{
      this.peliculas=data;
    }).catch(error => {
    })
  }
  next(num:any) {
   this.pages=num;
    this.getList(num);
  }
}
