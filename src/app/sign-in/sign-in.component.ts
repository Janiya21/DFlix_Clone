import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
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
    this.http.post("https://screen-api.dflix.com/screens?content-size=10&country-id=1&limit=9&page=0&device-type=TV&screen-id=2",this.profileForm.value).subscribe((res)=>{
        console.log(res);
    });
  }

  getUSers() {
    console.log('Form Data', this.profileForm.value);
    this.http.get("https://screen-api.dflix.com/screens?content-size=10&country-id=1&limit=9&page=0&device-type=TV&screen-id=2").subscribe((res)=>{
        console.log(res);
    });
  }
}
