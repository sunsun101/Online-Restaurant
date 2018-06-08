import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { fooditem } from '../fooditem';
import { FoodService } from '../food.service';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-body-header',
  templateUrl: './body-header.component.html',
  styleUrls: ['./body-header.component.css']
})
export class BodyHeaderComponent implements OnInit {

  foodlist$: Observable<fooditem[]>;
  private searchTerms = new Subject<string>();
  display = "";

  constructor(private foodservice : FoodService) { }
  
  
  search(term: string): void {
    this.searchTerms.next(term);
 }
    

  ngOnInit(){
    this.foodlist$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.foodservice.searchFoodItem(term)),
    );
  }
  

}
