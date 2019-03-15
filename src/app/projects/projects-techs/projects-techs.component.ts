import { ProjectTech } from './../../interfaces/project';
import { AppConfigsService } from './../../app.initializer';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projects-techs',
  templateUrl: './projects-techs.component.html',
  styleUrls: ['./projects-techs.component.scss']
})
export class ProjectsTechsComponent implements OnInit {
  @Input('techs') techs: ProjectTech;

  constructor(public appConfigsService: AppConfigsService) { }

  ngOnInit() {
  }
}
