import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl = "http://127.0.0.1:8000/api/users";
  constructor(private httpClient:HttpClient) { }
  getAllUsers(){
    return this.httpClient.get(this.userUrl);
  }
}
