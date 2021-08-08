import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  TopDevelopersURL= "http://127.0.0.1:8000/api/developers";
  baseApi= "http://127.0.0.1:8000/api/";
  userUrl = `${this.baseApi}users/`;
  headers = new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization':'Bearer '+JSON.parse(localStorage.getItem('token')||'{}')
  })
  next: any;
  constructor(private httpClient:HttpClient) { }
  checkCookie(){
    return this.httpClient.get("http://localhost:8000/sanctum/csrf-cookie");
  }
  register(user:any){
    return this.httpClient.post(this.baseApi + "register", user);
  }
  login(cred:any){
    return this.httpClient.post(this.baseApi + "login", cred,{withCredentials:true});
  }
  logout(){
    return this .httpClient.post(this.baseApi +"logout",{},{headers:this.headers})

  }
  getAllUsers(){
    return this.httpClient.get(this.userUrl);
  }
  getUser(id:any){
    return this.httpClient.get(this.userUrl + id)
  }
  addUser(user:any){
    return this.httpClient.post(this.userUrl,user,{headers:this.headers});
  }
  updateUser(id:any,user:any){
    return this.httpClient.put(this.userUrl + id,user,{headers:this.headers});
  }
  deleteUser(id:any){
    return this.httpClient.delete(this.userUrl + id,{headers:this.headers});
  }
  getDevelopers(){
    return this.httpClient.get(this.TopDevelopersURL);
  }
}
