import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient:HttpClient) { }

  baseUrl="http://localhost:8000/api/project/"
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


  deleteProject(id:any){
    return this.httpClient.delete(this. baseUrl + id,{headers:this.headers});
  }

  countProjects(id :any){
    return this.httpClient.get(this. baseUrl +'count/'+ id);
  } 

  getActiveProjects(id:any){
    return this.httpClient.get(this. baseUrl +'active/'+ id);
  }

  getRecentProject(){
    return this.httpClient.get(this. baseUrl +'recent');
  }


}
