import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ViewportScroller } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    items:6,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    items:6,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  customOptions3: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    items:6,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
    
  }

  clickedMe() {
    // alert("Hello ")
    console.log("In Unaa");
  }
  leaveMe() {
    // alert("Hello ")
    console.log("Leave Unaa");
  }

  setZoomEffect(tag:string, tag2:string) {
    let c = document.getElementById(tag);
    let cn = document.getElementById(tag2);

    c?.setAttribute("style", "display:none;");
    cn?.setAttribute("style", "display:block;");
    
  }

  setZoomOutEffect(tag:string, tag2:string) {
    let c = document.getElementById(tag);
    let cn = document.getElementById(tag2);

    c?.setAttribute("style", "display:block;");
    cn?.setAttribute("style", "display:none;");
    
  }

}
