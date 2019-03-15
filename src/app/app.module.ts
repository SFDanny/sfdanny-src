import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppEventService } from './app-event.service';
import { AppConfigsService } from './app.initializer';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DrawmenuComponent } from './drawmenu/drawmenu.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DrawmenuComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
  ],
  providers: [
    AppConfigsService,
    {
      provide: APP_INITIALIZER,
      useFactory: (apppInitializer: AppConfigsService) => () =>
        apppInitializer.init(),
      deps: [AppConfigsService],
      multi: true
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AppEventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
