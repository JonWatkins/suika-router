import { h, Component } from "suika";
import type { vNode } from "suika/dist/vdom";

export class NotFound extends Component {
  render(): vNode {
    return h(
      "div",
      {},
      h("h1", {}, "404"),
      h("p", {}, `Page ${this.attrs.currentRoute} not found.`)
    );
  }
}
