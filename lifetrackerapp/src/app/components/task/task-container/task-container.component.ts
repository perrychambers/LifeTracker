import { Component } from '@angular/core';
import { TaskButtonComponent } from "../task-button/task-button.component";
import { TasksComponent } from "../tasks/tasks.component";
import { UiService } from '../../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-task-container',
    standalone: true,
    templateUrl: './task-container.component.html',
    styleUrl: './task-container.component.css',
    imports: [TaskButtonComponent, TasksComponent, NgIf]
})
export class TaskContainerComponent {
    showAddTask: boolean;
    subscription: Subscription

    constructor(private uiService: UiService, private router: Router) {
        this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value)
    }

    toggleAddTask(): void {
        this.uiService.toggleAddTask();
    }

    hasRoute(route: string) {
        return this.router.url === route;
    }
}
