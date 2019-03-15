import { AppEventService, AppEventType } from './../app-event.service';
import { AppConfigsService, SYSTEM_SETTINGS } from './../app.initializer';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-drawmenu',
  templateUrl: './drawmenu.component.html',
  styleUrls: ['./drawmenu.component.scss']
})
export class DrawmenuComponent implements OnInit {

  public navs: any = [];

  public nav_collasped: string;

  constructor(
    private AppConfigsService: AppConfigsService,
    private appEventService: AppEventService
  ) {
    this.navs = this.AppConfigsService.getSystemSettings(SYSTEM_SETTINGS.NAVIGATIONS);
  }

  ngOnInit() {
  }

  onCollapsed(id: string): void {
    this.nav_collasped = (id === this.nav_collasped ? '' : id);
  }
  onClose(): void {
    this.appEventService.event(AppEventType.EVENT_COLLAPSE_MENU, { 'menu_collapsed' : false } );
  }
}
