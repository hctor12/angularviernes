import { HttpClient, withFetch } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import axios from 'axios';

@Injectable()
export class ServicePersona {
  constructor(private _https: HttpClient) {}

  //HTTPCLIENT
  getPersonas(): Observable<any> {
    const urlApi = environment.urlApiPersonas;
    let request = '/api/personas';
    return this._https.get(urlApi + request);
  }

  //Axios
  getPersonasV2() {
    const urlApi = environment.urlApiPersonas;
    let request = '/api/personas';
    return axios.get(urlApi + request);
  }

  //With Fetch
  getPersonasV3() {
    const urlApi = environment.urlApiPersonas;
    let request = '/api/personas';
    return fetch(urlApi + request).then((response) => response.json());
  }
}
