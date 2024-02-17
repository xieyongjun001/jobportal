import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { Job } from '../../model/job.model'
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  jobList: Job[] = [];
  jobObj:Job = {
    id: '',
    title: '',
    type: '',
    description: ''
  };

  id: string = '';
  title: string = '';
  type: string = '';
  description: string = '';
  constructor(private data: JobService) { }

  ngOnInit(): void {
    // this.getAllJobs();
  }

  // getAllJobs() {
  //   this.data.getAlllJobs().subscribe(res => {
  //     this.jobList = res.map((e: any) => {
  //       const data = e.payload.doc.data();
  //       data.id = e.payload.doc.id;
  //       return data;
  //     })
  //   }, err => {
  //     alert("No Data!")
  //   })
  // }

  // addJob() {
  //   if(this.title=="" ||this.description==""||this.type=="" ){
  //     alert('Please Fill All');
  //     return
  //   }
  //   this.jobObj.id='';
  //   this.jobObj.title=this.title;
  //   this.jobObj.description=this.description;
  //   this.jobObj.type=this.type;
  //   this.data.addJob(this.jobObj);
  // }

  // updateJob() {

  // }

  // deleteJob(job: Job) {
  //   if (window.confirm('Are you sure to delete ' + job.title + '?')) {
  //     this.data.deleteJob(job);
  //   }
  // }
}
