import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  autoPlay = false;
  intervalId!: any;
  currentIndex: number = 0;

  items = [
      { label: 'SALSA', imageUrl: '../../assets/65890971.png' },
      { label: 'BACHATA', imageUrl: '../../assets/65891002.png' },
      { label: 'KIZOMBA', imageUrl: '../../assets/65899291.png' },

    ];

  pictures = [
    { imageUrl: '../../assets/pexels-arthouse-studio-4571943.jpg'},
    { imageUrl: '../../assets/pexels-cottonbro-studio-5378700.jpg'},
    { imageUrl: '../../assets/pexels-cottonbro-studio-5821482.jpg'},
    { imageUrl: '../../assets/pexels-cottonbro-studio-6626882.jpg'},
    { imageUrl: '../../assets/pexels-cottonbro-studio-6962024.jpg'},
    { imageUrl: '../../assets/pexels-cottonbro-studio-8090137.jpg'},
    { imageUrl: '../../assets/pexels-dziana-hasanbekava-7275385.jpg'}
  ]

  constructor() { }


  startAutoPlay() {
    this.intervalId = setInterval(() => this.scrollRight(), 3000);
  }

  toggleAutoPlay() {
    this.autoPlay = !this.autoPlay;
    if (this.autoPlay) {
      this.startAutoPlay();
    } else {
      this.stopAutoPlay();
    }
  }

  stopAutoPlay() {
    clearInterval(this.intervalId);
  }

  ngOnInit(): void {
    this.startAutoPlay();
  }

  resetAutoPlay() {
    this.currentIndex = 0;
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  scrollLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  scrollRight() {
    if (this.currentIndex < this.pictures.length - 5) {
      this.currentIndex++;
    } else {
      this.resetAutoPlay();
    }
  }

  }


