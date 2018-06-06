import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FoodService} from '../food.service';
import {fooditem} from '../fooditem';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  message = "This item not ordered yet";
  displayimage = "./assets/food1.jpg";
  buttonvalue = "Order";
  color = "green";
  foodlist: fooditem[];



  searchvalue(form : NgForm){

    console.log(form);

  }

  constructor(private foodservice: FoodService) { 

 
    setTimeout(() => {
      this.displayimage = "./assets/food2.jpeg";
    },3000);
  
  }

  addtolist(){
    this.message = "Food ordered";
  }
  onmouseover(){
    this.buttonvalue = "Place Order";
    this.color = "red";

  }
  onmouseleave(){
    this.buttonvalue = "Order";

  }

  getFoodItem():void{
    this.foodlist = this.foodservice.getFood();
  }

  ngOnInit() {
    this.getFoodItem();
  }

}
