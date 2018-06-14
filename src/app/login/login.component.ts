import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { getServices } from '../services/get.services';
import { fooditem } from '../fooditem';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [getServices ]
})
export class LoginComponent implements OnInit {

  loginForm :FormGroup;
  // public my_obj: any = {

  //   firstname      :'',
  //   lastname       :'',
  //   username       :'',
  //   email          : '',
  //   maritalstatus  :'',
  //   gender         : '',
  
  
  //   }
  my_obj : fooditem[];

  constructor(private get : getServices) { }

  ngOnInit() {

    this.loginForm = new FormGroup ({

      'username' : new FormControl(null,Validators.required),
      'password' : new FormControl(null,Validators.required)
  });
  
  console.log("hello");
}
loginsubmit(){

   console.log("entered loginsubmit");
   this.getdetail();
 
 }
 public getdetail(){

  console.log("entered getdetail");

  this.get.getvalues().subscribe((res) => {this.my_obj = res.json();
  if(this.my_obj)
  {
    this.validate();
  }
}
);    
  


}

validate(){
  
}


}
