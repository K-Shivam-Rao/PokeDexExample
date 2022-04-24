import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']

  
})
export class PokemonListComponent implements OnInit {
 pokemons: any[] = [];
 p: number = 1;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getPokemons()
      .subscribe((response: any) =>{
        response.results.forEach((results:any) => {
          this.dataService.getMoreData(results.name)
           .subscribe((uniqResponse: any) =>{
             this.pokemons.push(uniqResponse);
             console.log(this.pokemons);
           });
        });
      });
  }

}
