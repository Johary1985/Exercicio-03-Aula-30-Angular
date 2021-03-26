import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { ImagensComponent } from './imagens/imagens.component';


const routes: Routes = [

  { path: '', component: SearchComponent },
	{ path: 'Busqueda/:q', component: ImagensComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
