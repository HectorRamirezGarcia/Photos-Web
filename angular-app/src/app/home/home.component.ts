import { Component, OnInit } from '@angular/core';
import { PhotosService } from './../_services/photos.services';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'photo-project';
  yearsFolders: string[] = [];
  faHeart = faHeart;

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
