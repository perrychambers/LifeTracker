import { Routes } from '@angular/router';
import { TasksComponent } from './components/task/tasks/tasks.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TaskContainerComponent } from './components/task/task-container/task-container.component';

export const routes: Routes = [
    {path: 'tasks', component: TaskContainerComponent},
    {path: '', component: DashboardComponent}
];
