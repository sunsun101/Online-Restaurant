import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { fooditem } from '../fooditem';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import {Routes, Router} from '@angular/router';
import {FoodService} from '../food.service';


@Component({
  selector: 'app-body-header',
  templateUrl: './body-header.component.html',
  styleUrls: ['./body-header.component.css']
})
export class BodyHeaderComponent implements OnInit {

  foodlist : any;
  display = "";
  
  

  constructor( private router : Router, private foodservice : FoodService ) { 

  }
  
  ngOnInit(){

  this.foodservice.getFood().subscribe((foodlistreceived)=> {this.foodlist = foodlistreceived});

    
  }
  
  searchitem(i : string){
    
    this.foodservice.displayitem = [];

    for(let j = 0 , k = 0 ; j < this.foodlist.length ; j++){

      
      if(this.foodlist[j].name == i){


          console.log("entered if loop");

         

           this.foodservice.displayitem[k]= this.foodlist[j];
           k++ ;

         

       }
    }       
   
    this.router.navigate(['/search_display']);
 
  }
      
 
    
}
