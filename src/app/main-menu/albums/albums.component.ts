import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/Services/Album/album.service';
import { Album_Model } from 'src/app/Models/Albums_Model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  
  Albums:Album_Model[] | undefined;
  LastAlbumId:number = 4;
  MaxAlbumId:number = 0;
  ProgressBar:boolean = false;
  FullItem:boolean = false;

  constructor(private AlbumsService:AlbumService) { }

  ngOnInit(): void {

    // Load The First Content
    this.AlbumsService.getAll().subscribe(data => {
      this.Albums = data.data.sort((a:any, b:any) => a.id - b.id).filter((p:any) => p.id <= this.LastAlbumId);
      this.MaxAlbumId = data.data.length;
    });
  }

  // With User Scroll Load More Content

  onScroll(){
    if(this.LastAlbumId >= this.MaxAlbumId){
      this.FullItem = true;
    }else{
      this.ProgressBar = true;
      this.AlbumsService.getAll().subscribe(data => {
        this.Albums = data.data.sort((a:any, b:any) => a.id - b.id).filter((p:any) => p.id <= this.LastAlbumId);
      });
      this.LastAlbumId+=4;
      this.ProgressBar = false;
    }
  }

  IdThrower(event:any){
    environment.AlbumsId = (Number)(event.target.attributes.id.value);
  }

}