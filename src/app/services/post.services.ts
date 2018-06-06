import {Injectable} from '@angular/core';
import { Http, Response} from '@angular/http';


@Injectable()

export class postServices{

    constructor(private _http : Http){


    }

    private user: any;

    postvalues(user){

        let _url : string = "https://reqres.in/api/users";
        return this._http.post(_url, user);
    }
    //         { 
        
    //     firstname      : user.firstname,
    //     lastname       : user.lastname,
    //     username       : user.username,
    //     email          : user.email,
    //     maritalstatus  : user.maritalstatus,
    //     gender         : user.gender,});
    // }   
}