import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MoviesdbService } from './servicios/moviesdb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 nombre:any;
 topRated:any;
 private subscription! : Subscription
  constructor(private router:Router,private moviesdbService:MoviesdbService) { }

  ngOnInit(): void {
  }
   serachMovies(event:any) {
    this.nombre= event.target.value;
    this.moviesdbService.searchMovies$(this.nombre)
    .subscribe(data=>{
      this.topRated=data;
    });
    this.router.navigateByUrl(`peliculas/buscar/${this.nombre}`);
  }
 ngOnDestroy(){
   this.subscription.unsubscribe();
 }
}
