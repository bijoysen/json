import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Injectable} from '@angular/core';

@Injectable()
export class AjaxService {
    constructor(public http: Http) {
   
    }
    //"assets/data/tag.data.json"
    public call(url: string, data?: any, method?: any) :Promise<any> {
        if(typeof method === "undefined") {
            method = "GET";
        }
        let promise;
        switch(method) {
            case "GET":
                promise = new Promise((resolve, reject) => {
                    this.http.get(url).toPromise().then((response) => {
                        resolve(response.json());
                    }).catch((error) => {
                        reject(error);
                    });
                });
                 
            break;
        }
        return promise;    
    }
}