import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/service/messages.service';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-messages',
  templateUrl: './user-messages.component.html',
  styleUrls: ['./user-messages.component.css']
})
export class UserMessagesComponent implements OnInit {

  userData: any;
  onlineUser: User = new User();
  names:any;
  i:any;
  username:any = '';
  image:any = '' ;
  constructor(private messageService:MessagesService , 
    private httpClient: HttpClient ,
    private userservice: UserService
    ) { }

  ngOnInit(): void {
    this.onlineUser.id = localStorage.getItem('id');
    this.getUserMessages(this.onlineUser.id);
    this.getUser(this.onlineUser.id);
    console.log(this.onlineUser.image);
  }

  

  getUserMessages(id: any) {
    return this.messageService.getUserMessage(this.onlineUser.id).subscribe((res) => {
      this.names = res;
      for(this.i=0 ; this.i<this.names.length ; this.i++){
        if(this.names[this.i].sender_id == this.onlineUser.id){

          //define username
          this.names[this.i].username = this.names[this.i].reciever_username;
          delete this.names[this.i].reciever_username;
          //define image
          this.names[this.i].image = this.names[this.i].reciever_image;
          delete this.names[this.i].reciever_image;
          //define id
          this.names[this.i].id = this.names[this.i].reciever_id;
          delete this.names[this.i].reciever_id;
        } 
        else{
        //   //define username
          this.names[this.i].username = this.names[this.i].sender_username;
          delete this.names[this.i].sender_username;
        //   //define image
          this.names[this.i].image = this.names[this.i].sender_image;
          delete this.names[this.i].sender_image;
          //define id
          this.names[this.i].id = this.names[this.i].sender_id;
          delete this.names[this.i].sender_id;
        }
      }
      console.log(this.names);
    });
  }

  getUser(id: any) {
    return this.userservice.getUser(id).subscribe((res) => {
      this.userData = res;
      this.onlineUser = this.userData;
      this.username = this.onlineUser.username;
      this.username = this.username.username;
      console.log(this.username);
      this.image = res;
      this.image = this.image.image;
      return this.username

    });
  }


}
