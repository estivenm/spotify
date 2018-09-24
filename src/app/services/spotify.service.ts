import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  urlBusqueda: string = 'https://api.spotify.com/v1/search';
  urlArtistas: string = 'https://api.spotify.com/v1/artists';
  urlAccount: string = 'https://accounts.spotify.com/api/token';
  artist: any;

  httpOptions = {
    headers: new HttpHeaders({
      'authorization': 'Bearer BQCbJnAZjQdGQ5STlf5TqhpAZ10pr_o1XJWvipxoLa3dNKP_rI4UewwZv01SyA8f-XfKAM_uOeTuTTevIPM',
    })
  };

  constructor(private httpClient: HttpClient) { }

  getArtistas(termino: string) {

    const query = `?q=${termino}&type=artist`;
    const url = this.urlBusqueda + query;
    this.httpClient.get(url, this.httpOptions).subscribe(data => {
      this.artist = data;
      console.log('service getartist =>', this.artist);
    });
    return this.httpClient.get(url, this.httpOptions);

  }

  getArtista(id: string) {

    const query = `/${id}`;
    const url = this.urlArtistas + query;
    return this.httpClient.get(url, this.httpOptions);

  }

  getTop(id: string) {

    const query = `/${id}/top-tracks?country=US`;
    const url = this.urlArtistas + query;
    return this.httpClient.get(url, this.httpOptions);

  }
}
