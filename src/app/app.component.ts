import { AppEventService, AppEventInterface, AppEventType } from './app-event.service';
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private cdr: ChangeDetectorRef,
    public appEventService: AppEventService
  ) {
    this.appEventService.announcer.pipe(takeUntil(this.destroy$)).subscribe((event: AppEventInterface) => {
      switch (event.type) {
        case AppEventType.EVENT_COLLAPSE_MENU:
          {
            this.appEventService.menu_collapsed = event.data.menu_collapsed;
            break;
          }
      }

      if (this.cdr && !this.cdr['destroyed']) {
        this.cdr.detectChanges();
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Now let's also unsubscribe from the subject itself:
    this.destroy$.unsubscribe();
  }
}
