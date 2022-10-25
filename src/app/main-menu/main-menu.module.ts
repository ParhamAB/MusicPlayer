import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuRoutingModule } from './main-menu-routing.module';
import { SongsComponent } from './songs/songs.component';
import { AlbumsComponent } from './albums/albums.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialsModule } from '../materials/materials.module';



@NgModule({
  declarations: [
    SongsComponent,
    AlbumsComponent,
  ],
  imports: [
    CommonModule,
    MainMenuRoutingModule,
    MaterialsModule,
    InfiniteScrollModule,
    NgxSpinnerModule
  ]
})
export class MainMenuModule { }
