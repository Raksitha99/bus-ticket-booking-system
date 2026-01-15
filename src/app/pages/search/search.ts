import {Component, inject} from '@angular/core';
import {SearchService} from '../services/search-service';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.html',
  styleUrl: './search.css',
  providers: [SearchService]
})
export class Search {
  private searchService = inject(SearchService)

  constructor() {
    this.searchService.getLocations().subscribe((data) => {
      console.log(data);
    })

  }

}
