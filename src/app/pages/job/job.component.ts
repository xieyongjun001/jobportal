import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { JobService } from 'src/app/services/job.service';



@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent {
  jobs$!: Observable<any>;
  constructor(private jobService: JobService) {

  }

  ngOnInit(): void {
    this.jobs$ = this.jobService.getAllJobsByCategories();
  }

  getCategories(jobs: any) {
    return Object.keys(jobs);
  }

  handleItemDeleted(deletedItem: any): void {
    this.jobs$ = this.jobService.getAllJobsByCategories();
  }
  
}
