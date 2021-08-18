import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent implements OnInit {
  constructor(private projectService: ProjectService) {}

  pending: any = 0;
  processing: any = 0;
  completed: any = 0;
  userId : any ;

  ngOnInit() {
    this.userId = localStorage.getItem('id');
    this.countProjects(this.userId, 'pending');
    this.countProjects(this.userId,'processing');
    this.countProjects(this.userId,'done');

    // this.chart();
    // this.pending = this.countProjects(1, 'pending');
    // console.log(this.pending);
    // this.processing = this.countProjects(1, 'proccessing');
    // this.completed = this.countProjects(1, 'done');
  }

  countProjects(id: any, status: any) {
    this.projectService.countProjects(id, status).subscribe((res) => {
      if (status == 'pending') {
        this.pending = res;
      } else if (status == 'processing') {
        this.processing = res;
      } else {
        this.completed = res;
      }
      this.chart();
      //return  res;
    });
  }

  data: any;

  chart() {
    this.data = {
      labels: ['Completed Projects', 'Current Projects', 'Pending Projects'],
      datasets: [
        {
          data: [this.pending, this.completed, this.processing],
          backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
          hoverBackgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
        },
      ],
    };
  }
}
