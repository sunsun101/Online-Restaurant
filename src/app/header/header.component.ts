import { Component, OnInit } from '@angular/core';
import {NgbModal,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {profile} from '../profile';
import {Routes, Router} from '@angular/router';
import { getServices } from '../services/get.services';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'ONLINE-RESTAURANT';
  loginForm: FormGroup;
  my_obj: profile[];
  result: any[];
  errormessage: string;
  modalReference: any;
  closeResult: any;



  constructor( private modalService: NgbModal, private get: getServices,  private router: Router ) {}

  ngOnInit() {
    this.loginForm = new FormGroup ({

      'username' : new FormControl(null, Validators.required),
      'password' : new FormControl(null, Validators.required)
    });
  }

  open(content) {

    this.modalReference = this.modalService.open(content);
    this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }
  loginsubmit() {

    this.getdetail();
  }
  public getdetail() {


    this.get.getvalues().subscribe((res) => {
        this.my_obj = res.json();
        if ( this.my_obj) {
          this.result = Object.keys(this.my_obj).map(e => this.my_obj[e]);
          console.log(this.result);
          this.validate();

        }
      }
    );
  }

// login validation part

  validate() {
    for (let j = 0 ; j < this.result.length; j++)
    {
      console.log(this.result.length);
      if (this.loginForm.value.username === this.result[j].username && this.loginForm.value.password === this.result[j].password)
      {
        this.router.navigate(['/home']);
        this.modalReference.close();
        break;
      }

    }

    this.errormessage = 'Invalid username or password';
  }




}
