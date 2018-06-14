import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {getServices} from '../services/get.services';
import { postServices } from '../services/post.services';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [getServices, postServices]
})
export class SignupComponent implements OnInit {


  @ViewChild('f') signupform: NgForm;
    
  

  defaultvalue = 'male';
  maritalstatus = ['single','married'];
 
  



  user = {

    firstname      :'',
    lastname       :'',
    username       :'',
    email          : '',
    maritalstatus  :'',
    gender         : '',


  }
	
 

  onsubmit(){
      this.user.firstname         = this.signupform.value.firstname;
      this.user.lastname          = this.signupform.value.lastname;
      this.user.username          = this.signupform.value.username;
      this.user.email             = this.signupform.value.email;
      this.user.maritalstatus     = this.signupform.value.marital_status;
      this.user.gender            = this.signupform.value.gender;
      this.signupform.reset();
      this.postdetail();
  }


  

  ngOnInit() {
  }

  
  constructor(private post  : postServices){}
  
 


  public postdetail(){
          console.log("entered postdetail");
          this.post.postvalues(this.user).subscribe();
  }


}
