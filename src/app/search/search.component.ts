// import { GifService } from './../gif.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
  term: string;

  ngOnInit(): void {
  }

  search(form) {


    // Permite ao formulario pegar o valor dos dados do term, para logo chamar no HTML 
    console.log ("teste",form);
    location.href = `/Busqueda/${form.value.term}`;
        
  }
}
