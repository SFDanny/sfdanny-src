import { AppConfigsService } from './../../app.initializer';
import { UtilsService } from './../../services/utils.service';
import { Component, OnInit, Input } from '@angular/core';
import { ProjectTeam } from 'src/app/interfaces/project';

@Component({
  selector: 'app-projects-team',
  templateUrl: './projects-team.component.html',
  styleUrls: ['./projects-team.component.scss']
})
export class ProjectsTeamComponent implements OnInit {
  @Input('teams') teams: ProjectTeam;
  @Input('projectId') projectId: string;

  public Utils: UtilsService = UtilsService;
  constructor(public appConfigsService: AppConfigsService) { }

  ngOnInit() {
  }

}
