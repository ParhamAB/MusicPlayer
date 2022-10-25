import { Component, OnInit } from '@angular/core';
import { Songs_Model } from 'src/app/Models/Songs_Model';
import { SongService } from 'src/app/Services/Song/song.service';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  providers:[],
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {


  Songs: Songs_Model[] = [];
  LastSongId: number = 4;
  MaxSongId: number = 0;
  ProgressBar: boolean = false;
  FullItem: boolean = false;
  Page: number = 2;

  constructor(private SongService: SongService,private spinner:NgxSpinnerService) { }



  ngOnInit(): void {
    // Load The First Content
    this.SongService.getAll(0).subscribe(data => {
      this.Songs = data.data.sort((a: any, b: any) => a.id - b.id);
    });
    this.spinner.hide();
  }

  // With User Scroll Load More Content

  onScroll() {
    this.spinner.show();
    this.SongService.getAll(0, this.Page++).subscribe(data => {
      data.data.sort((a: any, b: any) => a.id - b.id).forEach((arr: any) => {
        this.Songs.push(arr);
      });
    });
    this.spinner.hide();
  }


  IdThrower(event: any) {
    console.log("clicked")
    environment.SongURL = (String)(event.target.attributes.id.value);
  }

  alert(){
    window.alert("Link Saved");
  }
}
