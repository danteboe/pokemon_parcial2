import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDetailDto } from './pokemonDetailDto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  apiUrl : string = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http : HttpClient) { }

  getPokemons(): PokemonDetailDto[] {
    let pokemons : PokemonDetailDto[] = [];
    for (let i = 1; i <= 20; i++) {
      this.getPokemon(i.toString()).subscribe((pokemon) => {
        pokemons.push(pokemon);
      });
    }
    return pokemons;
  }

  getPokemon(id : string): Observable<PokemonDetailDto> {
    return this.http.get<PokemonDetailDto>(`${this.apiUrl}${id}`);
  }

  getPokemonsByType(typeName: string): Observable<PokemonDetailDto[]> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/type/${typeName}`).pipe(
      map(response => response.pokemon.map((p: any) => p.pokemon))
    );
  }
}
