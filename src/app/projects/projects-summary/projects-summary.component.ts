import { Component, OnInit, Input } from '@angular/core';
import { ProjectSummary } from 'src/app/interfaces/project';

@Component({
  selector: 'app-projects-summary',
  templateUrl: './projects-summary.component.html',
  styleUrls: ['./projects-summary.component.scss']
})
export class ProjectsSummaryComponent implements OnInit {
  @Input('summary') summary: ProjectSummary;

  constructor() { }

  ngOnInit() {
  }

}
