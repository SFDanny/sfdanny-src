import { Role } from './../interfaces/member';
export class UtilsService {

  constructor() {
    throw new Error('Utils class should not be instantiated. Please use the static functions');
  }

  public static getRoleByProjectId(data: Array<Role>, projectId: string): Role {
    let allRoles: Array<Role> = [];
    if (data) {
      if (data) {
        allRoles = data.filter((role: Role) => role.projectId === projectId);
      }
    }
    return allRoles[0];
  }

  public static getIconFromTechId(techId: string, allTechs: any): string {
    return allTechs && allTechs[techId] ? allTechs[techId] : '';
  }
}
