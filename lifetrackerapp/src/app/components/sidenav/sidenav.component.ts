import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, Optional } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatList, MatListItem, MatNavList } from '@angular/material/list';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenav, MatList, MatIcon, MatNavList, MatListItem, MatSidenavContainer, NgClass, RouterOutlet, MatSidenavContent, CommonModule, RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  
  

}
