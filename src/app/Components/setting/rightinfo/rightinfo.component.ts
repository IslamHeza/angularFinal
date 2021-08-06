import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/_models/user';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-rightinfo',
  templateUrl: './rightinfo.component.html',
  styleUrls: ['./rightinfo.component.css']
})
export class RightinfoComponent implements OnInit {
  user = new User;
  data:any;
  imageURL: string="";
  uploadForm: FormGroup;

  constructor(private userService:UserService,private router:Router,private route:ActivatedRoute,public fb: FormBuilder) { this.uploadForm = this.fb.group({
    avatar: [null],
    name: ['']
  })}
  ngOnInit(): void {
    this.userService.getUser(this.route.snapshot.params.id).subscribe(res =>{
      this.data = res;
      this.user = this.data;
    })
    // console.log(this.route.snapshot.params.id);
  }
  updateUser(){
    this.userService.updateUser(this.route.snapshot.params.id,this.user).subscribe(res =>{
      // console.log(this.user);
      return this.router.navigate([`/profile/${this.route.snapshot.params.id}`]);
    })
  }
  showPreview(event :any) {
    const file = (event.target).files[0];
    this.uploadForm.patchValue({
      avatar: file
    });
    // this.uploadForm.get('avatar').updateValueAndValidity();

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    (reader.readAsDataURL(file))
  }
  // Submit Form
  submit() {
    console.log(this.uploadForm.value.file)
  }
}
