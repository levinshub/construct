import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgFor, NgForOf,CommonModule } from "@angular/common";
import { Router } from '@angular/router';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,CarouselModule,NgFor,CommonModule,NgbAccordionModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  items = ['First', 'Second', 'Third'];

  title = 'construct';
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 100,
    navText: ['Next', 'Prev'],
    nav: true,
    lazyLoad:true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
  }
  customOptions_projects: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 1000,
    navText: ['Next', 'Prev'],
    nav: false,
    lazyLoad:true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
  }
  productImages = [
    {
      image: "/assets/17.jpg",
      id: "1",
      name: "Red Chili Powder",
      actualPrice: "100",
      discountPrice: "80",
      discountPercent: "20%"
    }, {
      image: "/assets/17.jpg",
      id: "2",
      name: "Sirudhaniya puttu maavu",
      actualPrice: "80",
      discountPrice: "60",
      discountPercent: "25%"
    }, {
      image: "/assets/17.jpg",
      id: "3",
      name: "Small Onion Thalippu Vadagam",
      actualPrice: "60",
      discountPrice: "30",
      discountPercent: "50%"
    }, {
      image: "/assets/1.jpg",
      id: "4",
      name: "Sukku Malli Coffee Powder",
      actualPrice: "150",
      discountPrice: "130",
      discountPercent: "15%"
    }, {
      image: "/assets/1.jpg",
      id: "5",
      name: "Ready Idiyappam mix Flour",
      actualPrice: "180",
      discountPrice: "150",
      discountPercent: "10%"
    }, {
      image: "/assets/1.jpg",
      id: "6",
      name: "Kuzhambu Chili Powder",
      actualPrice: "235",
      discountPrice: "225",
      discountPercent: "3%"
    }, {
      image: "/assets/1.jpg",
      id: "7",
      name: "Kollu Idli Podi",
      actualPrice: "267",
      discountPrice: "247",
      discountPercent: "8%"
    }, {
      image: "/assets/1.jpg",
      id: "8",
      name: "Black Pepper Powder",
      actualPrice: "361",
      discountPrice: "349",
      discountPercent: "5%"
    }, {
      image: "/assets/1.jpg",
      id: "9",
      name: "Readymade Murukku Maavu",
      actualPrice: "246",
      discountPrice: "223",
      discountPercent: "12%"
    },
  ]
}
