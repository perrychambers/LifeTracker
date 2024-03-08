import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIcon } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatListModule } from '@angular/material/list';
import { MatDivider } from '@angular/material/divider';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIcon, 
    MatSidenavModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatSelectModule,
    MatListModule,
    MatDivider,
    DashboardComponent
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

}
