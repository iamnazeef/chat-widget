export interface Route {
    id: string;
    component: React.ComponentType;
    title: string;
}

export interface Routes {
    [key: string]: Route;
}