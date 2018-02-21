import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Mobile } from './mobile';
import { Observable } from "rxjs/Rx"


const urlApi = 'http://127.0.0.1:3000/';

@Injectable()
export class MobileService {

  result: Object[] = [];

  constructor(private http: Http) { }

  getMobiles() {
    return this.http.get(`${urlApi}claro/mobile`)
      .map(result => this.result = result.json())
      .catch((e) => {
        return Observable.throw(
          new Error(`${ e.status } ${ e.statusText }`)
        );
      });
  }

  getMobileByCode(code) {
    return this.http.get(`${urlApi}claro/mobile/${code}`)
      .map(result => this.result = result.json()).catch((e) => {
        return Observable.throw(
          new Error(`${ e.status } ${ e.statusText }`)
        );
      });
  }

  createMobile(post: Mobile) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${urlApi}claro/mobile`, JSON.stringify(post), options)
      .map(result => this.result = result.json()).catch((e) => {
        return Observable.throw(
          new Error(`${ e.status } ${ e.statusText }`)
        );
      });
  }

  deleteMobile(id){
    return this.http.delete(`${urlApi}claro/mobile/${id}`)
    .map(resul => this.result = resul.json());
  }



}
