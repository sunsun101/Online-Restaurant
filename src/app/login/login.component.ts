import { Component, OnInit } from '@angular/core';
import { getServices } from '../services/get.services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [getServices ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }




}
