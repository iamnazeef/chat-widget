export interface Route {
    id: string;
    // component: React.ComponentType;
    title: string;
    params?: { [key: string]: any };
}

export interface Routes {
    [key: string]: Route;
}