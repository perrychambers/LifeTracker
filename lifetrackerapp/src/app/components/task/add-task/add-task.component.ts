import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../../interfaces/Task';
import { FormsModule, NgModel } from '@angular/forms';
import { UiService } from '../../../services/ui.service';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  showAddTask: boolean;
  subscription: Subscription;

  text: string;
  day: string;
  reminder: boolean = false;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value)
  }


  onSubmit(): void {
    if(!this.text) {
      alert('Please add a task.')
      return;
    }

    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    this.text = "";
    this.day = ""
    this.reminder = false;

  }
}
