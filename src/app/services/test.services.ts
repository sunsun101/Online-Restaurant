import {Injectable} from '@angular/core';
import { Http} from '@angular/http';

@Injectable()

export class testservices{

    constructor(private _http : Http){


    }

    getvalues(){

        let _url : string = "http://192.168.50.70:8080/tms-service/application/applicationtype";
        return this._http.get(_url);
    }
}