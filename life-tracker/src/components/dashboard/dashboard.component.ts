import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule} from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatIcon } from '@angular/material/icon';
import { MatList, MatListItem } from '@angular/material/list';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [   
    MatCardModule,
    MatGridListModule,
    CommonModule,
    MatList,
    MatListItem,
    MatIcon,
    NgxChartsModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  chartData: any[] = [
    {
      "name": "January",
      "value": 5000
    },
    {
      "name": "February",
      "value": 6000
    },
    {
      "name": "March",
      "value": 7000
    },
    {
      "name": "April",
      "value": 8000
    },
    {
      "name": "May",
      "value": 9000
    },
    {
      "name": "June",
      "value": 10000
    }
  ];

  // Chart settings
  showXAxis = true;
  showYAxis = true;
  showLegend = false;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Month';
  yAxisLabel = 'Savings ($)';

   // Task list data
   tasks: string[] = [
    'Task 1: Complete project proposal',
    'Task 2: Review code changes',
    'Task 3: Prepare presentation',
    'Task 4: Attend meeting with client',
    'Task 5: Update documentation'
  ];

  // Generate a random date for the task
  randomDate() {
    const startDate = new Date(2022, 0, 1); // Start date: Jan 1, 2022
    const endDate = new Date(); // End date: current date
    const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    return randomDate;
  }
}
