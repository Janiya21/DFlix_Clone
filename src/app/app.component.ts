import { Component, HostListener } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ViewportScroller } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dflix';
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    items:6,
    navText: ['', ''],
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

  // ------------------------------------------

  constructor(private formBuilder:FormBuilder, private http: HttpClient, private scroll: ViewportScroller){
    
  }

  profileForm = this.formBuilder.group({
    firstName:[''],
    lastName:[''],
    address:[''],
    dob:[''],
    gender:['']
  })

  saveForm() {
    console.log('Form Data', this.profileForm.value);
    this.http.post('',this.profileForm.value).subscribe((res)=>{
        console.log(res);
    });
  }

  clickedMe() {
    console.log("Click Unaa");
    
  }

  //--------------------------------------


  
}

