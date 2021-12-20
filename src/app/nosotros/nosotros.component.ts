import { Component, OnInit } from '@angular/core';
import { MoviesdbService } from '../servicios/moviesdb.service';
@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {
  pages:number=1;
  topRated:any;
  constructor(private moviesdbService:MoviesdbService) { }

  ngOnInit(): void {
    this.getTopRated(1);
  }

  getTopRated(page:number): void {
    this.moviesdbService.getListTopratedMovies(page)
    .then(data=>{
      this.topRated=data;
    })
  }
  next(page:any) {
    this.pages=page;
     this.getTopRated(page);
   }
}
