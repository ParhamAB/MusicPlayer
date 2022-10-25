import { Component, HostListener, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  checkAndroid: boolean = this.platform.ANDROID;
  checkIos: boolean = this.platform.IOS;
  deferredPrompt: any;
  showButton = false;

  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(e:any) {
    console.log(e);
    e.preventDefault();
    this.deferredPrompt = e;
    this.showButton = true;
  } 

  constructor(private platform: Platform) {
  }

  public ngOnInit(): void {
    this.checkAndroid = this.platform.ANDROID;
    this.checkIos = this.platform.IOS;
  }

  
  
  addToHomeScreen() {
    this.showButton = false;
    console.log(this.deferredPrompt);
    this.deferredPrompt.prompt();
    this.deferredPrompt.userChoice
      .then(() => {
        this.deferredPrompt = null;
      });
  }

}
