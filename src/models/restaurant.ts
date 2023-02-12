export interface IAddRestaurant {
    name: string;
    description: string;
    imgUrl: string;
}

export interface IRestaurant {
    id: number;
    name: string;
    ownerId: number;
    description: string;
    imgUrl: string;
}