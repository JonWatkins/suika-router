import type { Ctor } from "suika/dist/Component";
export type RouterOptions = {
    routes: Route[];
    mode: string;
};
export interface Route {
    component: Ctor;
    path: string;
    regex?: RegExp;
}
export declare class Router {
    routes: Array<any>;
    mode: string;
    current: string;
    constructor(options: RouterOptions);
    getFragment(): string;
    getHandler(path?: string): Ctor;
    navigate(path?: string): void;
}
export declare const createRouter: (options: RouterOptions) => Router;
