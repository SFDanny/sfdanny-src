import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export const AppEventType = {
  EVENT_COLLAPSE_MENU: 'EVENT_COLLAPSE_MENU',
  EVENT_NAVIGATION_START: 'EVENT_NAVIGATION_START',
  EVENT_NAVIGATION_END: 'EVENT_NAVIGATION_END',
  EVENT_NAVIGATION_CANCEL: 'EVENT_NAVIGATION_CANCEL',
};

export class AppEventInterface {
  constructor(
    public type: string,
    public data: any = null
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class AppEventService {
  public menu_collapsed: boolean;


  private _appAnnouncedSource: Subject<AppEventInterface> = new Subject<AppEventInterface>();

  // event handler can use this to register events with AppEventService
  public announcer: Observable<AppEventInterface> = this._appAnnouncedSource.asObservable();

  constructor() { }

  public event(type: string, data: any) {
    this._appAnnouncedSource.next(new AppEventInterface(type, data));
  }
}
