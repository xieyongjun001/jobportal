import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, take, tap } from 'rxjs';
import { Job, JobType } from 'src/app/model/job.model';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.css']
})
export class JobEditComponent implements OnInit {

  currentJob$!: Observable<any>;
  updatedItem: Job = {
    id:'',
    title: '',
    type: '',
    description: ''
  };
  jobtype = JobType;
  enumKeys: string[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private jobService: JobService, private router: Router) {
      this.enumKeys= Object.values(this.jobtype);
  }
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params["jobId"];
    this.currentJob$ = this.jobService.getAJobById(id);

    this.currentJob$.subscribe((originalItem) => {
      this.updatedItem.id = originalItem.$key;
      this.updatedItem.title = originalItem.title;
      this.updatedItem.description = originalItem.description;
      this.updatedItem.type = originalItem.type;

    });
  }

  // updateItem() {
  //   this.jobService.updateJob(this.updatedItem);
  // }

  onFormSubmit(f: NgForm) {
    console.log(this.updatedItem);

    this.jobService.updateJob(this.updatedItem).then(() => {
      console.log('Item Updated successfully');
      this.router.navigate(['/jobs']); // Navigate to /jobs after successful deletion
    })
    .catch(error => console.error('Error Updated item:', error));
  }
}