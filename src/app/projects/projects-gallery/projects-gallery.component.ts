import { Component, OnInit, Input, SimpleChange, OnChanges, ChangeDetectorRef } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery';

@Component({
  selector: 'app-projects-gallery',
  templateUrl: './projects-gallery.component.html',
  styleUrls: ['./projects-gallery.component.scss']
})
export class ProjectsGalleryComponent implements OnInit, OnChanges {

  @Input('gallery') gallery: Array<string>;

  public galleryOptions: NgxGalleryOptions[];
  public galleryImages: NgxGalleryImage[] = [];
  constructor(
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '100%',
        height: '400px',
        thumbnailsColumns: 4,
        image: false,
        imageAnimation: NgxGalleryAnimation.Slide,
        imageSize: NgxGalleryImageSize.Contain,
        thumbnails: true,
        thumbnailSize: NgxGalleryImageSize.Contain
      },
      // max-width 992
      {
        height: '300px',
        breakpoint: 992,
        thumbnailsColumns: 3,
      },
      // max-width 768
      {
        height: '400px',
        breakpoint: 768,
        thumbnailsColumns: 2,
      },
      // max-width 576
      {
        height: '300px',
        breakpoint: 576,
        thumbnailsColumns: 1,
      }
    ];
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    if (changes['gallery'] !== undefined) {
      const galleries: Array<string> = changes['gallery'].currentValue;

      let newImages: NgxGalleryImage[];
      newImages = this.galleryImages.slice(this.galleryImages.length);
      if (galleries && galleries.length) {
        galleries.forEach((imageSrc: string) => {
          newImages.push(new NgxGalleryImage({
            small: imageSrc,
            medium: imageSrc,
            big: imageSrc
          }));
        });
      }
      this.galleryImages = newImages;
    }
  }
}
