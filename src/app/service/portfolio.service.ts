import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private httpClient:HttpClient) { }
  basrURL = "http://127.0.0.1:8000/api/portfolio/";

  getAllPortfolios(){
    return this.httpClient.get(this.basrURL);
  }

}
