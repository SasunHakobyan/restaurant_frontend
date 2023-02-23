export enum RoleValue {
    User = 'User',
    Admin = 'Admin',
    RestOwner = 'RestOwner'
}

export enum UserSign {
    SignIn = 'signIn',
    SignUp = 'signUp'
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