import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { testservices } from '../services/test.services';
import { postServices } from '../services/post.services';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [testservices, postServices]
})
export class SignupComponent implements OnInit {


  @ViewChild('f') signupform: NgForm;
    
  

  defaultvalue = 'male';
  maritalstatus = ['single','married'];
  public my_obj: any;
  public post_obj: any = {

  firstname      :'',
  lastname       :'',
  username       :'',
  email          : '',
  maritalstatus  :'',
  gender         : '',


  }



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
  }


  

  ngOnInit() {
  }

  
  constructor(private test : testservices,private post  : postServices){}
  
  public getdetail(){

          this.test.getvalues().subscribe(res => this.my_obj = res.json()[0]);    


   }



  public postdetail(){
          this.post.postvalues(this.user).subscribe(res => this.post_obj = res.json());
  }


}
