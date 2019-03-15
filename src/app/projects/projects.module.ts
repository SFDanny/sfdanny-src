import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ProjectsSummaryComponent } from './projects-summary/projects-summary.component';
import { ProjectsTechsComponent } from './projects-techs/projects-techs.component';
import { ProjectsTeamComponent } from './projects-team/projects-team.component';
import { ProjectsGalleryComponent } from './projects-gallery/projects-gallery.component';
import { NgxGalleryModule } from 'ngx-gallery';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    NgxGalleryModule
  ],
  declarations: [ProjectsPageComponent, ProjectsSummaryComponent, ProjectsTechsComponent, ProjectsTeamComponent, ProjectsGalleryComponent]
})
export class ProjectsModule { }
