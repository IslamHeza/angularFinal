import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/_models/user';
@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform( Developers:User[],  searchName:String): User[] {
    if (!Developers || !searchName){
      return Developers ;
    }

    return Developers.filter( User => 
      
      User.fname.toLowerCase().indexOf(searchName.toLowerCase())  !==-1  


)
  }

}
 