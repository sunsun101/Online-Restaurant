import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FoodService} from '../food.service';
import {fooditem} from '../fooditem';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
 
})
@NgModule({
  imports: [NgbModule]
})

export class BodyComponent implements OnInit {

  message = "This item not ordered yet";
  displayimage = "./assets/food1.jpg";

  buttonvalue: string[] = [''];
  color = "green";
  foodlist: any;

  len : number;
  i : number;
  


  searchvalue(form : NgForm){

    console.log(form);

  }

  constructor(private foodservice: FoodService, private modalService: NgbModal) { 

  
    // setTimeout(() => {
    //   this.displayimage = "./assets/food2.jpeg";
    // },3000);
  
    
  }

  addtolist(i : number){
    this.message = "Food ordered";
  
   

  }
  onmouseover(i : number){
    this.buttonvalue[i] = "Place Order";
    this.color = "red";
  

  }
  onmouseleave(i: number){
    this.buttonvalue[i] = "Order";

  }

  getFoodItem():void{
     this.foodservice.getFood().subscribe((foodlistreceived) => {this.foodlist = foodlistreceived});
     
  }

  

  ngOnInit() {
    this.getFoodItem();

     for(this.i = 0 ; this.i< 6 ; this.i++ ){

      this.buttonvalue[this.i] = 'Order';
    }

  }

 

 

  open(content) {
    this.modalService.open(content).result;
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
