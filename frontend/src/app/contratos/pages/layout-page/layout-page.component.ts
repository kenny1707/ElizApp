import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  standalone: false,
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {

  isCollapsed = false;
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

}
