import { Injectable } from '@angular/core';

// import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
// import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GifService {

  // gifs= new BehaviorSubject<any>('')

  constructor(private http: HttpClient) { }

  // Parametros fornecidos pela GIPHY API
  api_key = 'yCfM8FEwIddow6hd8XjIA3R5vUjysa6L';
  limit = '24';
  url = 'https://api.giphy.com/v1/gifs/search';
  q: string;
 

  // Funcao fornecedorda de dados para os componentes
  getApiGift(q){

      console.log(q);
    let url = `${this.url}?api_key=${this.api_key}&q=${q}&limit=${this.limit}`;
    return this.http.get(url);

    // return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gifname}&api_Key=%${environment.apiKey}&limit=24`).subscribe((response: any)=> {
    //   this.gifs.next(response.data);
    // });

  } 

  // getGif() {
  //   return this.gifs.asObservable();
  // }

}
