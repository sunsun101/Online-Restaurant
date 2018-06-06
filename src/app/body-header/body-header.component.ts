import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-body-header',
  templateUrl: './body-header.component.html',
  styleUrls: ['./body-header.component.css']
})
export class BodyHeaderComponent implements OnInit {


  display = "";

  constructor() { }

  ngOnInit() {
  }

}
