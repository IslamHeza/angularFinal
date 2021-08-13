import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PurposalService {

  constructor(private httpClient:HttpClient) { }

  baseUrl="http://localhost:8000/api/project/";
  PurposalURL= "http://127.0.0.1:8000/api/purposal";
  headers = new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization':'Bearer '+JSON.parse(localStorage.getItem('token')||'{}')
  })

}
