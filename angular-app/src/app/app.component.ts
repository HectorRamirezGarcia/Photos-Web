import { Component, OnInit } from '@angular/core';
import { PhotosService } from './_services/photos.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'photo-project';
  yearsFolders: string[] = [];

  constructor(
    private photosService: PhotosService // service PhotosService
    ) {
  }

  ngOnInit() {
    this.getYearsFolders();
  }

  getYearsFolders() {
    this.photosService.getYearsFolders().subscribe((folders) => { // Method getYearsFolders
      this.yearsFolders = folders;
    });
  }

}
