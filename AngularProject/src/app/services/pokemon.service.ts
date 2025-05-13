import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemonList(limit = 50, offset = 0): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon?limit=${limit}&offset=${offset}`);
  }

  getPokemonDetailsByUrl(url: string): Observable<any> {
    return this.http.get(url);
  }

  getAllPokemonNames(): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon?limit=100000`);
  }
}
