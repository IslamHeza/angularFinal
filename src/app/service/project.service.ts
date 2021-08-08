import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient:HttpClient) { }

  baseUrl="http://localhost:8000/api/project";
  MostProjectsURL= "http://127.0.0.1:8000/api/mostProjects";
  headers = new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization':'Bearer'+JSON.parse(localStorage.getItem('token')||'{}')
  })

  getAllProject(){
    return this.httpClient.get(this. baseUrl);
  }
  getProject(id:any){
    return this.httpClient.get(this. baseUrl + id)
  }

  addPortproject(project:any){
    return this.httpClient.post(this.baseUrl , project ,{headers:this.headers}) ;
  }
  updateProject(id:any,project:any){
    return this.httpClient.put(`${this. baseUrl}${id}`, project ,{headers:this.headers});
  }

  countProject(id :any){
    return this.httpClient.get(this. baseUrl +'count'+ id);
  }

  deleteProject(id:any){
    return this.httpClient.delete(this. baseUrl + id,{headers:this.headers});
  }


  getProjects(){
    return this.httpClient.get(this.MostProjectsURL);
  }
}


