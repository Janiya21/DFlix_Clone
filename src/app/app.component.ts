import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dflix';
  constructor(private formBuilder:FormBuilder, private http: HttpClient){

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
}
