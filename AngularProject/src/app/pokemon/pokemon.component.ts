import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemons: any[] = [];
  filteredPokemons: any[] = [];
  allPokemonList: any[] = [];
  isLoading = true;
  searchTerm = '';
  currentPage = 1;
  totalPokemons = 0;
  totalPages = 0;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
      this.pokemonService.getPokemonList(1, 0).subscribe(response => {
        this.totalPokemons = response.count;
        this.totalPages = Math.ceil(this.totalPokemons / 12);
        this.loadPokemons();
      });
      this.loadAllPokemonNames();

  }

  loadPokemons() {
    const offset = (this.currentPage - 1) * 12;
    this.isLoading = true;

    this.pokemonService.getPokemonList(12, offset).subscribe(response => {
      const detailsRequests = response.results.map((pokemon: any) =>
        this.pokemonService.getPokemonDetailsByUrl(pokemon.url)
      );

      forkJoin<any[]>(detailsRequests).subscribe((pokemonDetails) => {
        this.pokemons = pokemonDetails.map(p => ({
          name: p.name,
          image: p.sprites.front_default,
          stats: p.stats,
        }));
        this.filteredPokemons = [...this.pokemons];
        this.isLoading = false;
      });
    });
  }

  loadAllPokemonNames() {
    this.pokemonService.getAllPokemonNames().subscribe(response => {
      this.allPokemonList = response.results;
    });
  }

  search() {
    const term = this.searchTerm.toLowerCase().trim();

    if (!term) {
      this.filteredPokemons = [...this.pokemons];
      return;
    }

    this.isLoading = true;

    const matchedPokemons = this.allPokemonList.filter((p: any) =>
      p.name.toLowerCase().includes(term)
    ).slice(0, 10);

    if (matchedPokemons.length === 0) {
      this.filteredPokemons = [];
      this.isLoading = false;
      return;
    }

    const detailsRequests = matchedPokemons.map(p =>
      this.pokemonService.getPokemonDetailsByUrl(p.url)
    );

    forkJoin(detailsRequests).subscribe((pokemonDetails) => {
      this.filteredPokemons = pokemonDetails.map(p => ({
        name: p.name,
        image: p.sprites.front_default,
        stats: p.stats,
      }));
      this.isLoading = false;
    });
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadPokemons();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadPokemons();
    }
  }
}
