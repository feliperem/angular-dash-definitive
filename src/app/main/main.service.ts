import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, ReplaySubject, throwError } from 'rxjs';
import { Person } from './person';
import { Product } from './product';
import { catchError, tap } from 'rxjs/operators';
import { Comodo } from './comodo';
import { Aparelhos } from './aparelhos';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  readonly url = 'http://localhost:3000/api';

  private comodoSubject$: BehaviorSubject<Comodo[]> = new BehaviorSubject<Comodo[]>([]);
  private aparelhosSubject$: BehaviorSubject<Aparelhos[]> = new BehaviorSubject<Aparelhos[]>([]);
  private loaded: boolean = false;
  private loaded2: boolean = false;

  constructor(private http: HttpClient) { }

  getAparelhos(): Observable<Aparelhos[]>{
    if(!this.loaded2) {
      let id_user = localStorage.getItem('id_user');
      this.http.get<Aparelhos[]>(`${this.url}/aparelhos/${id_user}`)
        .subscribe(this.aparelhosSubject$);
      this.loaded2 = true
    }
    return this.aparelhosSubject$.asObservable();
  }


  

//Requisições para comodos
  getComodos(): Observable<Comodo[]>{
    if(!this.loaded){
      let id_user = localStorage.getItem('id_user');
      this.http.get<Comodo[]>(`${this.url}/comodos/${id_user}`)
      .pipe( tap((coms) => console.log(coms)))
      .subscribe(this.comodoSubject$);
      this.loaded = true;
    }
    return this.comodoSubject$.asObservable();
  }

  addComodos(d: Comodo): Observable<Comodo>{
    return this.http.post<Comodo>(`${this.url}/comodos`, d)
    .pipe(
      tap((com: Comodo) => this.comodoSubject$.getValue().push(com))
    )
  }

  delComodos(com: Comodo): Observable<any> {
    return this.http.delete(`${this.url}/comodos/${com._id}`)
      .pipe( 
        tap(() => {
          let comodos = this.comodoSubject$.getValue();
          let i = comodos.findIndex(d => d._id === com._id);
          if(i>=0){
            comodos.splice(i,1);
          }
      }))
  }

  updateComodo(com: Comodo): Observable<Comodo> {
    return this.http.patch<Comodo>(`${this.url}/comodos/${com._id}`, com)
      .pipe( 
        tap((d) => {
          let comodos = this.comodoSubject$.getValue();
          let i = comodos.findIndex(d => d._id === com._id);
          if(i>=0){
            comodos[i].name = d.name;
          }
        })
        )
  }

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.url}/people`)
      .pipe(
        tap(p=>console.log(p)),
        catchError((e) => {
          console.log(e);
          return throwError(e);
        })
      )
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/products`)
    .pipe(
      tap(p=>console.log(p)),
      catchError((e) => {
        console.log(e);
        return throwError(e);
      })
    );
  }

}
