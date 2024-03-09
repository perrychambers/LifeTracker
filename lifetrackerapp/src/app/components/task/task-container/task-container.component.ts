import { Component } from '@angular/core';
import { TaskButtonComponent } from "../task-button/task-button.component";

@Component({
    selector: 'app-task-container',
    standalone: true,
    templateUrl: './task-container.component.html',
    styleUrl: './task-container.component.css',
    imports: [TaskButtonComponent]
})
export class TaskContainerComponent {

    toggleAddTask(): void {
        console.log('123')
    }
}
