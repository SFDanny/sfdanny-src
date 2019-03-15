import { AppEventService, AppEventType } from './../app-event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {

  constructor(private appEventService: AppEventService) { }

  ngOnInit() {
  }

  onMenuCollapse(): void {
    this.appEventService.event(AppEventType.EVENT_COLLAPSE_MENU, { menu_collapsed: !this.appEventService.menu_collapsed });
  }
}
