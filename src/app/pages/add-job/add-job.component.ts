import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { take, tap } from 'rxjs';
import {JobType}from '../../model/job.model'
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {
  
  jobtype = JobType;
  enumKeys: string[] = [];

  constructor(private jobService: JobService, private router: Router) {
    this.enumKeys= Object.values(this.jobtype);
  }
  

  ngOnInit(): void {}

  onFormSubmit(f: NgForm) {

    const form = f.form.value;
    this.jobService.addNewJob(form).pipe(
      tap(() => {
        // this.router.navigate(['/'], { queryParams: { submitted: true } })
        this.router.navigate(['/jobs'])
        this.jobService.formSubmitted$.next(true);
      }),
      take(1),
    ).subscribe()
  }
}


