import { Component } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {

  constructor() { }

  public items: any[] = [
    { title: 'E-Commerce item 1', url: 'https://bit.ly/2VlsHZ8' },
    { title: 'E-Commerce item 2', url: 'https://bit.ly/2TmQeeW' },
    { title: 'E-Commerce item 3', url: 'https://bit.ly/2NrURzf' },
    { title: 'E-Commerce item 4', url: 'https://bit.ly/2EcKcnD' },
    { title: 'E-Commerce item 5', url: 'https://bit.ly/2U9KYse' },
    { title: 'E-Commerce item 6', url: 'https://bit.ly/2EcLlLX' },
    { title: 'E-Commerce item 7', url: 'https://bit.ly/2Vr5jd9' }
  ];
  public width = '100%';
  public height = '600px';

}
