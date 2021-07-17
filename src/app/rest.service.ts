import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestService {
  
  constructor(private http: HttpClient) { }

  public Get_Usuario(url:string){
    return this.http.get(url); //https://pokeapi.co/api/v2/pokemon?offset=0&limit=10
  }
}
