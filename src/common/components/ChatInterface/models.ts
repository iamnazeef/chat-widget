export interface Route {
    component: React.ComponentType;
    title: string;
}

export interface Routes {
    [key: string]: Route;
}