import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../pokemon/pokemon.service';
import { PokemonDetailDto } from '../../pokemon/pokemonDetailDto';

@Component({
  selector: 'app-type-listar',
  templateUrl: './type-listar.component.html',
  styleUrls: ['./type-listar.component.css']
})
export class TypeListarComponent implements OnInit {
  typeName!: string;
  pokemons: PokemonDetailDto[] = [];

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.typeName = this.route.snapshot.paramMap.get('typeName')!;
    this.getPokemonsByType();
  }

  getPokemonsByType() {
    this.pokemonService.getPokemonsByType(this.typeName).subscribe((pokemons) => {
      this.pokemons = pokemons;
    });
  }
}