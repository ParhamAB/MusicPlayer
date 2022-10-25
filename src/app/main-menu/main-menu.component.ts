import { Component, OnInit } from '@angular/core';
import { Songs_Model } from '../Models/Songs_Model';
import { SongService } from '../Services/Song/song.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private SongService: SongService) { }

  Songs: Songs_Model[] = [];

  ngOnInit(): void {
    this.SongService.getAll(4).subscribe(data => {
      this.Songs = data.data.sort((a: any, b: any) => a.id - b.id);
    });
  }
}
