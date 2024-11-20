import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetailDto } from '../pokemonDetailDto';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detalle',
  templateUrl: './pokemon-detalle.component.html',
  styleUrls: ['./pokemon-detalle.component.css']
})
export class PokemonDetalleComponent implements OnInit {

  pokemonId!: string;
  @Input() pokemonDetail!: PokemonDetailDto;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
  ) { }

  getPokemon() {
    this.pokemonService
      .getPokemon(this.pokemonId)
      .subscribe((apiData) => {
        this.pokemonDetail = apiData;
      });
  }
  ngOnInit() {
    if (this.pokemonDetail === undefined) {
      this.pokemonId = this.route.snapshot.paramMap.get('id')!;
    }
    if (this.pokemonId) {
      this.getPokemon();
    }
  }

}
