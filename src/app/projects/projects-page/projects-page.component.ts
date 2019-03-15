import { AppConfigsService, SYSTEM_SETTINGS } from './../../app.initializer';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  public projectId: string;
  public project: Project;

  constructor(
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private appConfigsService: AppConfigsService
  ) { }

  ngOnInit() {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe((params: Params) => {
      if (this.cdr && !this.cdr['destroyed']) {
        this.projectId = params['pageId'];
        this.project = this.appConfigsService.getProjectDetails(this.projectId);
      }
    }, (error: any): void => {
    });
  }
}
