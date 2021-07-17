import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError,  } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RestService {
  
  constructor(private http: HttpClient) { }

  public Get_Usuario(url:string){
    return this.http.get(url)
    .pipe(catchError(this.handleError));; //https://pokeapi.co/api/v2/pokemon?offset=0&limit=10
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
}
}
