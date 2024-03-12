import { Component, EventEmitter, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from "../sidenav/sidenav.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [MatToolbarModule, MatIconModule, RouterModule, MatSidenavModule, SidenavComponent]
})
export class HeaderComponent {
  @Output() onToggleSidenav: EventEmitter<any> = new EventEmitter<any>();

  title: string = 'Temporary Name'

  toggleSidenav(): void {
    this.onToggleSidenav.emit();
  }
}
