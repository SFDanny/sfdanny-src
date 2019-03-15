export interface Role {
    projectId: string;
    name: string;
}

export interface Member {
    is_admin?: boolean;
    name: string;
    roles: Array<Role>;
    location: string;
    socials: Array<string>;
}
