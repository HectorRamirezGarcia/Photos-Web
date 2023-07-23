import { Component, OnInit } from '@angular/core';
import { PhotosService } from './../_services/photos.services';

@Component({
    templateUrl: './photos-years.component.html',
    styleUrls: ['./photos-years.component.css']
})
export class PhotosComponent implements OnInit {
    title = localStorage.getItem('year');
    selectedYear!: string;
    photosInSelectedYear: File[] = [];

    constructor(
        private photosService: PhotosService // service PhotosService
    ) {
    }

    async ngOnInit() {
        this.selectedYear = localStorage.getItem('year')!;
        this.getPhotosForSelectedYear(localStorage.getItem('year')!);
        console.log(this.photosInSelectedYear);
    }

    getPhotosForSelectedYear(year: string) {
        this.photosService.getPhotosInYearFolder(year).subscribe((photos) => {
            this.photosInSelectedYear.push(...photos);
        });
    }
}
