import { NgStyle } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './task-button.component.html',
  styleUrl: './task-button.component.css'
})
export class TaskButtonComponent {
  @Input() text: string;
  @Input() color: string;
  @Output() btnClick = new EventEmitter();

  constructor(private router: Router) {}

  onClick(): void {
    this.btnClick.emit();
  }

}
