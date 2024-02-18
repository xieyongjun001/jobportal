import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AddJobComponent } from './pages/add-job/add-job.component';
import { JobDetailComponent } from './pages/job-detail/job-detail.component';
import { LoginComponent } from './login/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { JobComponent } from './pages/job/job.component';
import { JobEditComponent } from './pages/job-edit/job-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },  
  { path: 'jobs', component: JobComponent , canActivate: [AuthGuard] },
  { path: 'job/new', component: AddJobComponent , canActivate: [AuthGuard] },
  { path: 'job/:jobId', component: JobDetailComponent , canActivate: [AuthGuard] },
  { path: 'job/edit/:jobId', component: JobEditComponent , canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: '**', component: NotFoundComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
