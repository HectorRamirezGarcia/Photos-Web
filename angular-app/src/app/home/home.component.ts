import { Component, OnInit } from '@angular/core';
import { PhotosService } from './../_services/photos.services';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'photo-project';
  yearsFolders: string[] = [];

  constructor(
    private photosService: PhotosService, // service PhotosService
    ) {
  }

  ngOnInit() {
    this.getYearsFolders();
  }

  getYearsFolders() {
    this.photosService.getYearsFolders().subscribe((folders) => { // Method getYearsFolders
      this.yearsFolders.push(...folders);
    });
  }

  selectYearFolder(year: string) {
    localStorage.setItem('year', year);
  }
}
