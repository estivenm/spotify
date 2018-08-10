import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  // styleUrls: ['./artista.component.css']
})

export class ArtistaComponent implements OnInit {

  idArtista: string;
  artista: any;
  canciones: any;

  constructor(private _activateRoutes: ActivatedRoute,
    private _spotyfyService: SpotifyService) { }

  ngOnInit() {

    this._activateRoutes.params.subscribe((parameter: ParamMap) => {
      this.idArtista = parameter['id']
      this._spotyfyService.getArtista(this.idArtista).subscribe(dataArtista => this.artista = dataArtista)
      this._spotyfyService.getTop(this.idArtista).subscribe(dataTracks => this.canciones = dataTracks['tracks'] )
    });
  }

}

