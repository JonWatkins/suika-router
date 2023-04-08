import type { vNode, vAttrs } from "suika/dist/vdom";
import { Component } from "suika";
import { Router } from "./router";
export declare class RouterView extends Component {
    router: Router | null;
    constructor();
    _setAttrs(attrs: vAttrs): void;
    changeHandler(e: Event): void;
    onMounted(): void;
    beforeUnmount(): void;
    render(): vNode;
}
