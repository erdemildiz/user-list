import { Injectable } from '@angular/core';
// Http servis
import { Http } from '@angular/http';
// RxJs library getir
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  // Github api url
  API_URL = "https://api.github.com/users";
  /*
   Veri sayısı. Belirtilen sayı kadar veri çeker.
   ?page=0&per_page=30
  */
  PAGE_STEP_NUMBER = 40;

  constructor(private _http: Http) {}

  /*
   Github api üzerinde 30 adet user çeker
   @return Observable object
  */
  getUserList(){
   let pageUrl = "?page=0&per_page=" + this.PAGE_STEP_NUMBER;
   return this._http.get(this.API_URL + pageUrl)
              .map(res => res.json());
  }

  /*
   Belirtilen userı github api üzerinden çeker
   @param String
   @return Observable object
  */
  getUserDetails(userLogin?: String){
   return this._http.get(this.API_URL + "/" + userLogin)
              .map(res => res.json());
  }

  /*
   Belirtilen userın github api üzerinden repo bilgilerini çeker
   @param String
   @return Observable object
  */
  getUserRepos(userLogin?: String){
   return this._http.get(this.API_URL + "/" + userLogin + "/repos")
              .map(res => res.json());
  }

}
