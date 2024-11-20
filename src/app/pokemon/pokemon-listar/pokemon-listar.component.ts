import { Component, OnInit } from '@angular/core';
import { PokemonDetailDto } from '../pokemonDetailDto';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-listar',
  templateUrl: './pokemon-listar.component.html',
  styleUrls: ['./pokemon-listar.component.css']
})
export class PokemonListarComponent implements OnInit {

  pokemons: Array<PokemonDetailDto> = [];
  selected: boolean = false;
  selectedPokemon!: PokemonDetailDto;
  p: number = 1;
  searchedPokemon: any;

  constructor(private pokemonService: PokemonService) { }

  getPokemons(): void {
    this.pokemons = this.pokemonService.getPokemons();
  }

  onSelected(pokemon: PokemonDetailDto): void { 
    if (this.selectedPokemon === pokemon) { this.selected = !this.selected;
    }   
    else { this.selected = true; this.selectedPokemon = pokemon; } 
  }

  ngOnInit() {
    this.getPokemons();
  }

}
