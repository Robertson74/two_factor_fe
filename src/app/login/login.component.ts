import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public user = {
    username: '',
    password: ''
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.http.post(
      'http://localhost:3001/login',
      {
        username: form.form.value.username,
        password: form.form.value.password
      }
    ).subscribe((val) => {
      console.log(val);
    });
  }

}
