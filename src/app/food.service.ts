import { Injectable } from '@angular/core';
import { fooditem } from './fooditem';
import { Foodlist } from './mock-foodlist';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFood(): fooditem[] {
    return Foodlist;
  }
}
