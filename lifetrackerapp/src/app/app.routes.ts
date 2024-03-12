import { Routes } from '@angular/router';
import { TasksComponent } from './components/task/tasks/tasks.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    {path: 'tasks', component: TasksComponent},
    {path: '', component: DashboardComponent}
];
