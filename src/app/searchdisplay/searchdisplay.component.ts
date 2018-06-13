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

  buttonvalue: string[] = [''];
  price : number;
  fixedprice : number;
  name : string;

  foodlist : fooditem [];
  displayfoodlist : any[];

  foodname : string;
  

 

  constructor(private route : ActivatedRoute, private modalService: NgbModal, private foodservice : FoodService) {
  
   }

  
  
  ngOnInit() {

      this.route.queryParams.subscribe(
      (param) => {this.foodname = param["property_name"]});
      console.log(this);
      this.foodservice.getFood().subscribe((foodlistreceived) => {this.foodlist = foodlistreceived});
      this.displayFoodItem(this.foodlist);
      console.log(this.foodlist);
    
      
    }

    displayFoodItem(obtainedfoodlist: any[]){


      
      console.log(this);
      console.log(obtainedfoodlist[0].name);
   
      
        for(let j=0 ; j < this.foodlist.length ; j++){
          console.log("entered display loop");
          if(this.foodname == obtainedfoodlist[j].id){
              this.displayfoodlist = obtainedfoodlist[j];
          }
        }

     }  

        
     
        

    
    getquantity(i : number){
      console.log("entered function getquantity");
      this.price = this.fixedprice * i;
    }
  
   
    onmouseover(i : number){
      this.buttonvalue[i] = "Place Order";

    
  
    }
    onmouseleave(i: number){
      this.buttonvalue[i] = "Order";
  
    }
  
    open(content, j : number) {
      this.name = this.foodlist[j].name;
      this.price = this.foodlist[j].price ;
      this.fixedprice = this.foodlist[j].price;
      this.modalService.open(content).result;
    
    }

}
