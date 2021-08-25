import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';
import { UserService } from 'src/app/service/user.service';
import{Task}from 'src/app/_models/task'
import { User } from 'src/app/_models/user';
import { Project } from 'src/app/_models/project';
import { ProjectService } from 'src/app/service/project.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { PurposalService } from 'src/app/service/purposal.service';
@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {
  project: any = [];
  task: Task = new Task();
  form: FormGroup;
  submitted = false;
  taskData :any;
  user = new User();
  title: string = 'hello';
  data: any;
  userData: any;
  onlineUser: User = new User();


  purposal:any = [];
  constructor(
    private taskService: TaskService,
    private userService: UserService,
    private router: Router,
    private ProjectService: ProjectService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private purposalService: PurposalService,
  )
  {
    this.form = this.formBuilder.group({
     description: ['' , Validators.required],
      file: [null],

    });
  }


  ngOnInit(): void {
    this.onlineUser.id = localStorage.getItem('id');
    this.getUser(this.onlineUser.id);
    this.addtask();
  }

  get formControl() {
    return this.form.controls;
  }




  uploadFile(event: any) {
    const file = event.target.files[0];
    this.form.patchValue({
     file: file,
    });
    this.form.get('file')?.updateValueAndValidity();
  }


  onSubmit() {
    console.log(this.form.value);
    var formData: any = new FormData();
    formData.append('description', this.form.get('description')?.value);
    formData.append('file', this.form.get('file')?.value);
    this.addtask();
    // this.task.developer_id=this.onlineUser.id
    // this.task.owner_id=this.project.owner_id
    // this.task.project_id = this.project.id
    // this.ProjectService.getProject(this.route.snapshot.params.id).subscribe(res => {
    //   this.project = res;


    // });

    // return this.taskService.addTask(formData, this.onlineUser.id).subscribe(response=> {


    // });

  }

  addtask(){
    this.task.developer_id=this.onlineUser.id
    this.task.owner_id=this.purposal.owner_id
    this.task.project_id = this.purposal.project_id
    return this.taskService.addTask(this.task, this.onlineUser.id).subscribe(response=> {

      this.purposalService.getPurposal(this.route.snapshot.params.id).subscribe(res => {
        this.purposal = res;


      });
    });


  }
  getUser(id: any) {
    return this.userService.getUser(id).subscribe((res) => {
      this.userData = res;
      this.onlineUser = this.userData;
      console.log(this.onlineUser.type);
    });
  }
  // view(id:any){
  //   this.taskService.getTask(this.route.snapshot.params.id).subscribe( response => {
  //     this.data=response;
  //   });

  // };
}
















