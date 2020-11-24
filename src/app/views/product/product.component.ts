import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  images = [
    {
      path: '../../../../assets/images/img 1.jpeg',
    },
    {
      path: '../../../../assets/images/img 3.jpeg',
    },
    {
      path: '../../../../assets/images/img 2.jpeg',
    },
    {
      path: '../../../../assets/images/img 3.jpeg',
    },
  ];
  selectedImg: { path: string };

  constructor() {}

  ngOnInit(): void {
    this.selectedImg = this.images[0];
  }

  previewImg(i): void {
    this.selectedImg = this.images[i];
  }
}

