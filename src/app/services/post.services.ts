import {Injectable} from '@angular/core';
import { Http, Response} from '@angular/http';


@Injectable()

export class postServices{

    constructor(private _http : Http){


    }

    private user: any;

    postvalues(user){
        console.log("entered postvalues");
        let _url : string = "https://ng-online-restaurant.firebaseio.com/data.json ";
        return this._http.post(_url, user);
    }
   
}