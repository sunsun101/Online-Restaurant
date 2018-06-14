import {Injectable} from '@angular/core';
import { Http} from '@angular/http';

@Injectable()

export class getServices{

    constructor(private _http : Http){


    }

    getvalues(){
        console.log("entered getvalues fxn");
        let _url : string = "https://ng-online-restaurant.firebaseio.com/data.json ";
        return this._http.get(_url);
    }
}