import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
  // styleUrls: ['']
})
export class SearchComponent implements OnInit {

  constructor(private _spotifyServices: SpotifyService) { }

  ngOnInit() {
    this._spotifyServices.getArtistas("metalica")
  }

}
