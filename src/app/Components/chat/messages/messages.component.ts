import { Component, OnInit } from '@angular/core';
import { PusherEvent } from 'pusher-js/types/src/core/connection/protocol/message-types';
import Pusher from 'pusher-js';
import { ChatService } from 'src/app/service/chat.service';
import { Chat } from 'src/app/_models/chat';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from 'src/app/_models/message';
import { ActivatedRoute, Router } from '@angular/router';
import { MessagesService } from 'src/app/service/messages.service';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {


  reciever_id = this.route.snapshot.params.id;
  messag ='';
  messages :any[] =[] ;
  Message:any = new Message();
  username :any = '' ;
  onlineUser: User = new User();
  userData: any;
  image:any;
  names:any;
  i:any;
  headers = new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization':'Bearer '+JSON.parse(localStorage.getItem('token')||'{}')
  })
  constructor(private messagesService : MessagesService
     , private httpClient:HttpClient
      , private route: ActivatedRoute , 
      private userservice: UserService ,
      private router: Router
      ) {
    
  }

  ngOnInit(): void {

    this.username = '';
    this.image = '';

    //get online user id
    this.onlineUser.id = localStorage.getItem('id');
    this.getUser(this.onlineUser.id);
    
    //view users
    this.getUserMessages(this.onlineUser.id);
    //get all messages
    this.getAllMessages();

    //pusher code
    Pusher.logToConsole = true;

    const pusher = new Pusher('6c3f3c5c403e51a00541', {
      cluster:'eu'
    });

    const channel = pusher.subscribe('chat');
    channel.bind('message', (data: any) => {
      this.messages.push(data);
      console.log(data);
      // this.messages[this.messages.length-1].username = this.username;

      return this.Message = this.messages;

    });


  }
  submit(){
    console.log(this.messag);
    this.httpClient.post('http://127.0.0.1:8000/api/realTimeChat/' + this.reciever_id,{
      sender_id: this.onlineUser.id,
      reciever_id:this.route.snapshot.params.id,
      message: this.messag ,
      username : this.username , 
      image : this.image
    } , {headers:this.headers}).subscribe(() =>{
         this.messag = '';
         this.username = '';
         this.image = '';
       });
    }

    getAllMessages(){
      return this.messagesService.getMessages(this.route.snapshot.params.id , this.onlineUser.id).subscribe((res: any)=>{

        this.messages = res;
        // console.log(this.Message);

      })
    }

    getUser(id: any) {
      return this.userservice.getUser(id).subscribe((res) => {
        this.userData = res;
        this.onlineUser = this.userData;
        // this.username = this .onlineUser.username;
        // console.log(this.username);

        this.username = res;
        this.username = this.username.username;
        // console.log(this.username);

        this.image = this.onlineUser.image;
  
      });
    }

    getUserMessages(id: any) {
      return this.messagesService.getUserMessage(this.onlineUser.id).subscribe((res) => {
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
  
    async move($id:any){
      
     if(await this.router.navigate(['realTimeChat' + '/' + $id])){
      window.location.reload();
     }
    }
  

}
