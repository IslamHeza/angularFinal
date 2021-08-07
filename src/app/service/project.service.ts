import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient:HttpClient) { }

  baseUrl="http://localhost:8000/api/project"
  headers = new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization':'Bearer'+JSON.parse(localStorage.getItem('token')||'{}')
  })

  addPortproject(project:any){
    return this.httpClient.post(this.baseUrl , project ,{headers:this.headers}) ;
  }

  countProject(id:any){
    return this.httpClient.get(`${this.baseUrl}count/${id}`);
  }

}
