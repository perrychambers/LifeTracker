import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { TaskContainerComponent } from "./components/task/task-container/task-container.component";
import { TasksComponent } from "./components/task/tasks/tasks.component";
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SidenavComponent } from "./components/sidenav/sidenav.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    providers: [BrowserAnimationsModule],
    imports: [RouterOutlet, HeaderComponent, TaskContainerComponent, TasksComponent, HttpClientModule, FontAwesomeModule, SidenavComponent]
})
export class AppComponent {
  title = 'lifetrackerapp';
}
