import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private httpClient:HttpClient) { }

  baseURL = "http://127.0.0.1:8000/api/portfolio/";
  headers = new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization':'Bearer'+JSON.parse(localStorage.getItem('token')||'{}')
  })

  getAllPortfolios(){
    return this.httpClient.get(this.baseURL);
  }
  
  getPortfolio(id:any){
    return this.httpClient.get(`${this.baseURL}${id}`)
  }

  addPortfolio(portfolio:any){
    return this.httpClient.post(this.baseURL , portfolio ,{headers:this.headers}) ;
  }

  updatePortfolio(id:any,Portfolio:any){
    return this.httpClient.put(`${this.baseURL}${id}`,Portfolio,{headers:this.headers});
  }
  deletePortfolio(id:any){
    return this.httpClient.delete(this.baseURL + id,{headers:this.headers});
  }

}
