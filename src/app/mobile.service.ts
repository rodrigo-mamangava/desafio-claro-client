import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Mobile } from './mobile';

const urlApi = 'http://127.0.0.1:3000/';

@Injectable()
export class MobileService {

  result: Object[] = [];

  constructor(private http: Http) { }

  getMobiles() {
    return this.http.get(`${urlApi}claro/mobile`)
      .map(result => this.result = result.json());
  }

  getMobileByCode(code) {
    return this.http.get(`${urlApi}claro/mobile/${code}`)
      .map(result => this.result = result.json());
  }

  createMobile(post: Mobile){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(`${urlApi}claro/mobile`, JSON.stringify(post), options)
      .map(result => this.result = result.json());
  }



}
