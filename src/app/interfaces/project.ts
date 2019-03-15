export interface ProjectSummary {
    key: string;
    value?: string;
}

export interface ProjectTech {
    groupName: string;
    items?: Array<string>;
}

export interface ProjectTeam {
    groupName: string;
    members?: Array<string>;
}

export interface Project {
    summary: Array<ProjectSummary>;
    techs: ProjectTech;
    teams: ProjectTeam;
    gallery: Array<string>;
}
