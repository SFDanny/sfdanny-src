import { Project } from './interfaces/project';
import { Member } from './interfaces/member';
import { Tech } from './interfaces/tech';
import { take, finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const SYSTEM_SETTINGS = Object.freeze({
  NAVIGATIONS: 'navigations',
  PAGES: 'pages',
  ALL_TECHS: 'all_techs',
});

@Injectable({
  providedIn: 'root'
})
export class AppConfigsService {
  public config: any = {};
  public members: Map<string, Member> = new Map<string, Member>();
  public techs: Map<string, Tech> = new Map<string, Tech>();
  public projects: Map<string, Project> = new Map<string, Project>();

  constructor(private http: HttpClient) { }

  public init(): Promise<any> {
    const loadSettings = (): Promise<any> => {
      return new Promise((resolve: (res: any) => void, reject: (res: any) => void) => {
        this.http.get('assets/settings.json').pipe(take(1)).pipe(finalize(() => {
          resolve(true);
        })).subscribe((response: any) => {
          console.log('[AppConfigsService] : loaded setting.json', response);
          this.config = response ? response : {};
        }, (error: any) => {
          console.log('[AppConfigsService] : failed to fetch settings', error);
          this.config = {};
        });
      });
    };

    const loadProjects = (): Promise<any> => {
      return new Promise((resolve: (res: any) => void, reject: (res: any) => void) => {
        this.http.get('assets/projects.json').pipe(take(1)).pipe(finalize(() => {
          resolve(true);
        })).subscribe((response: any) => {
          console.log('[AppConfigsService] : loaded techs.json', response);
          if (response) {
            for (const key in response) {
              if (response.hasOwnProperty(key)) {
                this.projects.set(key, response[key]);
              }
            }
          }
        }, (error: any) => {
          console.log('[AppConfigsService] : failed to fetch techs', error);
          this.projects.clear();
        });
      });
    };

    const loadTechs = (): Promise<any> => {
      return new Promise((resolve: (res: any) => void, reject: (res: any) => void) => {
        this.http.get('assets/techs.json').pipe(take(1)).pipe(finalize(() => {
          resolve(true);
        })).subscribe((response: any) => {
          console.log('[AppConfigsService] : loaded techs.json', response);
          if (response) {
            for (const key in response) {
              if (response.hasOwnProperty(key)) {
                this.techs.set(key, response[key]);
              }
            }
          }
        }, (error: any) => {
          console.log('[AppConfigsService] : failed to fetch techs', error);
          this.techs.clear();
        });
      });
    };

    const loadMembers = (): Promise<any> => {
      return new Promise((resolve: (res: any) => void, reject: (res: any) => void) => {
        this.http.get('assets/members.json').pipe(take(1)).pipe(finalize(() => {
          resolve(true);
        })).subscribe((response: any) => {
          console.log('[AppConfigsService] : loaded members.json', response);
          if (response) {
            for (const key in response) {
              if (response.hasOwnProperty(key)) {
                this.members.set(key, response[key]);
              }
            }
          }
        }, (error: any) => {
          console.log('[AppConfigsService] : failed to fetch members', error);
          this.members.clear();
        });
      });
    };
    return loadSettings().then(loadProjects).then(loadTechs).then(loadMembers);
  }

  public getSystemSettings(type: string) {
    return this.config && this.config[type] ? this.config[type] : {};
  }

  public getProjectDetails(id: string): Project {
    return this._getItemFromMap(this.projects, id);
  }

  public getProjectListFromIds(ids?: Array<string>): Array<Project> {
    return this._getListFromMap(this.projects, ids);
  }

  public getTechDetails(id: string): Tech {
    return this._getItemFromMap(this.techs, id);
  }

  public getTechListFromIds(ids?: Array<string>): Array<Tech> {
    return this._getListFromMap(this.techs, ids);
  }

  public getMemberDetails(id: string): Member {
    return this._getItemFromMap(this.members, id);
  }

  public getMemberListFromIds(ids?: Array<string>): Array<Member> {
    return this._getListFromMap(this.members, ids);
  }

  private _getItemFromMap(data: any, id: string): any {
    let result: any = null;
    if (data.has(id)) {
      result = data.get(id);
    }
    return result;
  }

  private _getListFromMap(data: any, ids?: Array<string>): Array<any> {
    const results: Array<any> = [];
    if (ids) {
      ids.forEach((id: string) => {
        if (data.has(id)) {
          results.push(data.get(id));
        }
      });
      // results = Array.from(data.values());
    }
    return results;
  }
}
