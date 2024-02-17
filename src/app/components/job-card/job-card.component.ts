import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { Job } from 'src/app/model/job.model';
import { JobService } from 'src/app/services/job.service';
import { take, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent {
  @Input() job!: Job;
  @Output() itemDeleted = new EventEmitter<Job>();

  constructor(private jobService: JobService, private router: Router) {

  }

  trimText(text: string) {
    return text?.substring(0, 75) + '...'
  }

  // get isDisabled() {
  //   return this.card.stock === 0
  // }


  handleClick() {
    this.jobService.deleteJob(this.job);
    

    // this.jobService.deleteJob(this.job).pipe(
    //   tap((ret) => {
    //     console.log(ret);
    //     // this.router.navigate(['/'], { queryParams: { submitted: true } })
    //     this.router.navigate(['/jobs'])
    //     this.jobService.formSubmitted$.next(true);
    //   }),
    //   take(1),
    // ).subscribe()

  }

  confirmDeleteItem() {
    const isConfirmed = confirm('Are you sure you want to delete '+this.job.title+'?');
    
    if (isConfirmed) {
      this.deleteItem();
    }
  }

  deleteItem() {
    this.jobService.deleteJob(this.job)
      .then(() => {
        console.log('Item deleted successfully');
        // this.router.navigate([this.router.url]);
        this.itemDeleted.emit(this.job);

      })
      .catch(error => console.error('Error deleting item:', error));
  }
}
