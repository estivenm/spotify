import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../../search/search.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  providers: [SearchComponent],
  //styleUrls: ['']
})
export class NavbarComponent implements OnInit {

  search: string = "";
  constructor(private _searchComponent: SearchComponent) { }

  ngOnInit() { }

  getSearchArtist() {
    return this._searchComponent.buscarArtistas()
  }

}
