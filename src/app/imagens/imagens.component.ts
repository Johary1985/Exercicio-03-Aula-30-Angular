import { GifService } from './../gif.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imagens',
  templateUrl: './imagens.component.html',
  styleUrls: ['./imagens.component.css']
})
export class ImagensComponent implements OnInit {

  gifs: any= [];
  q: string;

  constructor(private route: ActivatedRoute, private gifService: GifService) { }

  ngOnInit(): void {

    // Parametro para navegar na rota
    this.route.params.subscribe(params => {
      this.q = params['q'];
      console.log(params);
      // Funcao para obter  dados do servico
      this.gifService.getApiGift(this.q).subscribe(gifs => {
        this.gifs = gifs;
      });  

     });
     
  }
 


// this.gifService.getApiGift(this.q);
//     this.gifService.getGif().subscribe((response: any) => {
}