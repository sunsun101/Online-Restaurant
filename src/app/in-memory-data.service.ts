import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const Foodlist = [

        {id:1 , name:'momo' ,       price:100 , image :'./assets/momo.jpg' },
        {id:2 , name:'pizza' ,      price:200 , image :'./assets/pizza.jpg' },
        {id:3 , name:'burger' ,     price:200 , image :'./assets/burger.jpeg' },
        {id:4 , name:'sphagetti' ,  price:300 , image :'./assets/sphagetti.jpeg' },
        {id:5 , name:'sushi' ,      price:400 , image :'./assets/sushi.jpg' },
        {id:6 , name:'fried chicken' , price:500 , image :'./assets/friedchicken.jpeg' },
       
    
    ]
    return {Foodlist};
  }
}