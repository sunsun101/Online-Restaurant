import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FoodService} from '../food.service';
import {fooditem} from '../fooditem';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ViewChild , Input} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],

})
@NgModule({
  imports: [NgbModule]
})

export class BodyComponent implements OnInit {

  @ViewChild('f') signupform: NgForm;



  buttonvalue: string[] = [''];
  foodlist: fooditem[];

  len: number;
  name: string;
  price: number;
  fixedprice: number;
  quantity: number;


  searchvalue(form: NgForm) {

    console.log(form);

  }

  constructor(private foodservice: FoodService, private modalService: NgbModal) {


    // setTimeout(() => {
    //   this.displayimage = "./assets/food2.jpeg";
    // },3000);


  }

  getquantity(i: number) {

    this.price = this.fixedprice * i;
  }


  onmouseover(i: number) {
    this.buttonvalue[i] = 'Place Order';
  }

  onmouseleave(i: number) {
    this.buttonvalue[i] = 'Order';

  }

  getFoodItem(): void {
     this.foodservice.getFood().subscribe((foodlistreceived) => {
       this.foodlist = foodlistreceived;
       if(this.foodlist ) {
         console.log('entered if loop');
        for(let i = 0 ; i < this.foodlist.length; i++ ){
          console.log('entered for loop');
          this.buttonvalue[i] = 'Order';
        }
       }});}
  ngOnInit() {
    this.getFoodItem();
  }
  open(content, j: number) {
    this.name = this.foodlist[j].name;
    this.price = this.foodlist[j].price ;
    this.fixedprice = this.foodlist[j].price;
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
