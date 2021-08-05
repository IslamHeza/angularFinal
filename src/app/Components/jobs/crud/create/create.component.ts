import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor() { }
    title:string = "hello" ;
  skills: string[] = [""];
  multiple:boolean = true ;
  ngOnInit(): void {
  }

}
