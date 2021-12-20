import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesdbService } from '../servicios/moviesdb.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  detail:any;
  id:any
  constructor(private moviesdbService:MoviesdbService, private activatedRoute:ActivatedRoute) { 
    this.id= this.activatedRoute.snapshot.paramMap.get('id');
    this.moviesdbService.detailMovies(this.id).then(data=>{
      this.detail=data;
  })

  }

  ngOnInit(): void {
    
  }
 detalleMovies(id:number){
 
 }
}
