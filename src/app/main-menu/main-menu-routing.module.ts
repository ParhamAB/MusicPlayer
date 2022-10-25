import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { MainMenuComponent } from './main-menu.component';
import { SongsComponent } from './songs/songs.component';

const routes: Routes = [
  {path:'',component:MainMenuComponent},
  {path:'Albums',component:AlbumsComponent},
  {path:'Songs',component:SongsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainMenuRoutingModule { }
