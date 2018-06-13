import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { fooditem } from '../fooditem';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import {Routes, Router} from '@angular/router';

@Component({
  selector: 'app-body-header',
  templateUrl: './body-header.component.html',
  styleUrls: ['./body-header.component.css']
})
export class BodyHeaderComponent implements OnInit {

  foodlist : any;
  display = "";
  
  

  constructor( private router : Router ) { 

  }
  
  ngOnInit(){


    
  }
  
  searchitem(i : string){
    

    
          console.log("search function working");
       
          this.router.navigate(['/search_display'], 
          {queryParams: {
          
              "property_name": i }
          
          });
 
        }
      
    
    
}
