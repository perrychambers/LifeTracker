import { Component } from '@angular/core';
import { HomeComponent } from '../components/home/home.component';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, ToolbarComponent],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.css'
})
export class AppComponent {
  title = 'homes';
}
