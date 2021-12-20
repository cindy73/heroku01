import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesdbService {
  private movies$ = new Subject<any>();
  peliculas:any = [];
  constructor(private http:HttpClient) {
   
   }

  urlApi="https://api.themoviedb.org/3/";
  getListMovies(page:number) {
    return new Promise((resolve, reject) => {
      this.http.get(this.urlApi+'movie/now_playing?api_key=43bb95cae941badc90476b9f10f04134&language=es-es&release_date.gte=2021-12-31&release_date.lte=2021-01-01&page='+page)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  detailMovies(id:number) {
    return new Promise((resolve, reject) => {
      this.http.get(this.urlApi+'movie/'+id+'?api_key=43bb95cae941badc90476b9f10f04134&language=es-ES')
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  getListTopratedMovies(page:number) {
    return new Promise((resolve, reject) => {
      this.http.get(this.urlApi+'movie/popular?api_key=43bb95cae941badc90476b9f10f04134&language=es-ES&page='+page)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
   mostrarComponentes(nombre: string) {
    this.http.get(this.urlApi+'search/movie?api_key=43bb95cae941badc90476b9f10f04134&language=es-ES&query='+nombre+'&page=1&include_adult=false')
    .subscribe(
      data => {
        this.movies$.next(data);
      });
  } 
 
  searchMovies$(nombre:any): Observable<any> {
   this.mostrarComponentes(nombre);
   return this.movies$.asObservable();
  }

}
