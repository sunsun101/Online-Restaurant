import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../food.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { fooditem } from '../fooditem';
import { Observable, Subject } from 'rxjs';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-searchdisplay',
  templateUrl: './searchdisplay.component.html',
  styleUrls: ['./searchdisplay.component.css']
})
export class SearchdisplayComponent implements OnInit {

  
  price : number;
  fixedprice : number;
  name : string;

  foodlist : fooditem [];
  displayfoodlist : any[];

  foodname : string;
  

 

  constructor(private route : ActivatedRoute, private modalService: NgbModal, private foodservice : FoodService) {
  
   }

  
  
  ngOnInit() {

      // this.route.queryParams.subscribe(
      // (param) => {this.foodname = param["property_name"]});
      // console.log(this);
      this.foodservice.getFood().subscribe((foodlistreceived) => {this.foodlist = foodlistreceived});
      // this.displayFoodItem(this.foodlist);
      // console.log(this.foodlist);
      console.log("entered value passing fxn");
      this.displayfoodlist = this.foodservice.displayitem;
      console.log(this.displayfoodlist);
      console.log("item should have been displayed");
    
      
    }

    
        
    getquantity(i : number){
      console.log("entered function getquantity");
      this.price = this.fixedprice * i;
    }
  
   
   
  
    open(content, j : number) {
      this.name = this.displayfoodlist[j].name;
      this.price = this.displayfoodlist[j].price ;
      this.fixedprice = this.displayfoodlist[j].price;
      this.modalService.open(content).result;
    
    }

}
