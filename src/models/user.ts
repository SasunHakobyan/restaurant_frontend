enum RoleValue {
    User = 'User',
    Admin = 'Admin',
    RestOwner = 'RestOwner'
}

interface IRole {
    value: string;
}

export interface IUser {
    id: number;
    username: string;
    role: IRole;
}

export interface IUserAuth {
    username: string;
    password: string;
}