import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Route, RouterModule } from '@angular/router';
import { AuthGuard } from '@hamoye/flight-angular/auth';

export const DashboardRoutes: Route[] = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes)
  ],
})
export class DashboardModule {}
