import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, combineLatest, throwError } from 'rxjs';
import { Person } from './person';
import { Product } from './product';
import { catchError, tap, filter, map, delay } from 'rxjs/operators';
import { Comodo } from './comodo';
import { Aparelhos } from './aparelhos';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  readonly url = 'http://191.252.193.18:3000/api';
  //readonly url = 'http://localhost:3000/api';

  private comodoSubject$: BehaviorSubject<Comodo[]> = new BehaviorSubject<Comodo[]>([]);
  private aparelhosSubject$: BehaviorSubject<Aparelhos[]> = new BehaviorSubject<Aparelhos[]>([]);
  private loaded: boolean = false;
  private loaded2: boolean = false;

  constructor(private http: HttpClient) { }

  /*getAparelhos(): Observable<Aparelhos[]>{
    if(!this.loaded2) {
      let id_user = localStorage.getItem('id_user');
      this.http.get<Aparelhos[]>(`${this.url}/aparelhos/${id_user}`)
        .subscribe(this.aparelhosSubject$);
      this.loaded2 = true
    }
    return this.aparelhosSubject$.asObservable();
  }*/

  getAparelhos(): Observable<Aparelhos[]> {
    if (!this.loaded2) {
      let id_user = localStorage.getItem('id_user');
      combineLatest(
        this.http.get<Aparelhos[]>(`${this.url}/aparelhos/${id_user}`),
        this.getComodos())
      .pipe(
        tap(([aparelhos,comodos]) => console.log(aparelhos, comodos)),
        filter(([aparelhos,comodos])=> aparelhos!=null && comodos!=null),
        map(([aparelhos,comodos])=> {
          for(let p of aparelhos) {
            let ids = (p.comodo as string[]);
            p.comodo = ids.map((id)=>comodos.find(com=>com._id==id));
          }
          return aparelhos;
        }),
        tap((aparelhos) => console.log(aparelhos))
      )
      .subscribe(this.aparelhosSubject$);
      this.loaded2 = true;
    }
    return this.aparelhosSubject$.asObservable();
  }

  addAparelhos(apar: Aparelhos): Observable<Aparelhos>{
    let comodos = (apar.comodo as Comodo[]).map(d=>d._id);
    console.log(apar);
    return this.http.post<Aparelhos>(`${this.url}/aparelhos`, {...apar, comodos})
      .pipe( 
        tap((p) => {
          this.aparelhosSubject$.getValue()
            .push({...apar, _id: p._id})
        })
      )
  }

  deleteAparelhos(apar: Aparelhos): Observable<any> {
    return this.http.delete(`${this.url}/aparelhos/${apar._id}`)
    .pipe(
      tap(() => {
        let aparelhos = this.aparelhosSubject$.getValue();
        let i = aparelhos.findIndex(p => p._id === apar._id);
        if(i >= 0) {
          aparelhos.splice(i, 1);
        }
      })
    )
  }

  updateAparelhos(apar: Aparelhos): Observable<Aparelhos>{
    let comodos = (apar.comodo as Comodo[]).map(d=>d._id);
    return this.http.patch<Aparelhos>(`${this.url}/${apar._id}`, {...apar, comodos})
      .pipe(
        tap(() => {
          let aparelhos = this.aparelhosSubject$.getValue();
          let i = aparelhos.findIndex(p => p._id === apar._id);
          if(i >= 0) {
            aparelhos[i] = apar;
          }
        })
      )
  }

//Requisições para comodos
  getComodos(): Observable<Comodo[]>{
    if(!this.loaded){
      let id_user = localStorage.getItem('id_user');
      this.http.get<Comodo[]>(`${this.url}/comodos/${id_user}`)
      .pipe( tap((coms) => console.log(coms)),
        //delay(1000)
      )
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
