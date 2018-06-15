import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { getServices } from '../services/get.services';
import { fooditem } from '../fooditem';
import {Routes, Router} from '@angular/router';
import {profile} from '../profile';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [getServices ]
})
export class LoginComponent implements OnInit {

  loginForm :FormGroup;
  my_obj: profile[];
  result : any[];
  errormessage : string;
 

  constructor(private get : getServices,  private router : Router) { }

  ngOnInit() {

    this.loginForm = new FormGroup ({

      'username' : new FormControl(null,Validators.required),
      'password' : new FormControl(null,Validators.required)
  });
  

}


loginsubmit(){

    this.getdetail();
 
 }
 
 
public getdetail(){


  this.get.getvalues().subscribe((res) => {
    
   this.my_obj = res.json();
   if(this.my_obj)
  {
    this.result = Object.keys(this.my_obj).map(e=>this.my_obj[e]);
    console.log(this.result);
    this.validate();

  }
}
);    
  
}

// login validation part

validate(){

  
  for(let j = 0 ; j< this.result.length; j++)
  {
    console.log(this.result.length);
    if(this.loginForm.value.username == this.result[j].username && this.loginForm.value.password == this.result[j].password)
    {
      this.router.navigate(['/home']);
      break;
    }

  }

 this.errormessage = "Invalid username or password";
}


}
