import { Component } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { Task } from '../../../interfaces/Task';
import { TaskItemComponent } from "../task-item/task-item.component";
import { NgFor } from '@angular/common';
import { AddTaskComponent } from "../add-task/add-task.component";

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskItemComponent, NgFor, AddTaskComponent]
})
export class TasksComponent {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    })
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter((t) => t.id !== task.id))
  }

  toggleReminder(task: Task): void {
   task.reminder = !task.reminder;
   this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task): void {
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task))
  }

}
