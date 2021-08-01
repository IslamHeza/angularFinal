import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Catagory } from '../_models/catagory';
import { Workers } from '../_models/workers';

@Injectable({
  providedIn: 'root'
})
export class CatagoriesService {
  catagories:Catagory[]=[
    new Catagory(1 , "Doctors" , "assets/imges/doctor.jpg"),
    new Catagory(2 ,"Engineers","assets/imges/eng.jpg"),
    new Catagory(3 ,"programers", "assets/imges/programers.jpg"),
    new Catagory(4 ,"Net works", "assets/imges/network.jpg"),
    new Catagory(5 ,"lawyers", "assets/imges/lawyer.jpg"),
    new Catagory(6 ,"photographers", "assets/imges/photographer.jpg"),
  
 ];
 worker:Workers[]=[
     new Workers(1,"Hader Zayed","assets/imges/2.jpg","Mansoura" ,"ddddd",1),
     new Workers(2,"Mohamed Zayed","assets/imges/1.jpg","Tanta" ,"ddddd",2),
     new Workers(3,"Youmna Mohamed","assets/imges/3.jpg","Alexndria" ,"ddddd",4),
     new Workers(4,"Khaled Mustafa ","assets/imges/4.jpg","Dumiata" ,"ddddd",3),
     new Workers(5,"Ahmed salem","assets/imges/1.jpg","Cairo" ,"ddddd",5),
     new Workers(6,"mohamed Atef","assets/imges/3.jpg","cairo" ,"ddddd",3),
     new Workers(7,"nadia Ebrahiem","assets/imges/4.jpg","Mansoura" ,"ddddd",2),
     new Workers(8,"Hader Zayed","assets/imges/2.jpg","EL zamalik" ,"ddddd",4),
     new Workers(9,"tttttttt","assets/imges/2.jpg","EL mahla" ,"kkk ",1),

 ];
  
 listCatagories(){
  return this. catagories ;
}
detialsCatagory=new Catagory (0," "," ");

ShowCatagory(name:string){
   this.catagories.forEach(a => {
    if(a.catname==name){ 
      this.detialsCatagory=a;
      
    }
   })
}
listWorkers(){
  return this.worker ;
}
  constructor(public r:Router) { }
}
