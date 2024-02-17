import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { JobService } from 'src/app/services/job.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent  implements OnInit {

  currentId!: string;
  currentJob$!: Observable<any>;

  constructor(private activatedRoute: ActivatedRoute,
    private jobService: JobService,
    private location: Location) {

  }
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params["jobId"];
    this.currentJob$ = this.jobService.getAJobById(id);

    
  }
  goBack(): void {
    this.location.back();
  }

}
