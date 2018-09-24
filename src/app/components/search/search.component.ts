import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  // providers: [SpotifyService],
  // styleUrls: ['']
})

export class SearchComponent implements OnInit {

  //@Input() termino: string = "arcangel";
  termino: string = '';
  artistas: [any];
  constructor(private _spotifyServices: SpotifyService) { }

  ngOnInit() {
    // if(localStorage.getItem("nameSearch")) {
    //   this.termino = localStorage.getItem("nameSearch")
    //   this.buscarArtistas()
    // }
  }

  buscarArtistas() {
    return this._spotifyServices.getArtistas(this.termino).subscribe(data => this.artistas = data['artists'].items);
  }

  obtenerName() {
    localStorage.setItem('nameSearch', this.termino);
  }
}


