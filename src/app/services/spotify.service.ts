import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  urlBusqueda: String = "https://api.spotify.com/v1/search";
  urlArtistas: String = "https://api.spotify.com/v1/artists";

  constructor(private httpClient: HttpClient) { }

  getArtistas(termino: String) {

        const httpOptions = {
          headers: new HttpHeaders({
    //        'Content-Type':  'application/json',
            'authorization': 'Bearer BQCzH7rVwwL_GABt9kHm_87POvDgMpMhC997g86xKrNq0DteW6YmyBl1k_RqKGfyeRqRzxWSF8NgW3S3Ac0'
          })
        }

        let query = `?q=${termino}&type=artist`;
        let url = this.urlBusqueda + query;
        return this.httpClient.get(url,httpOptions)
        .subscribe(res =>{
          console.log(res);
        })

  }
}
