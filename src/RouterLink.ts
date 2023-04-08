import { h, fixOptions } from "suika";
import type { vNode, vAttrs } from "suika/dist/vdom";
import { navigate } from "./utils";

export const RouterLink = (options: vAttrs, children: vNode[]): vNode => {
  const props = fixOptions(options, {
    onclick: (e: Event) => {
      e.preventDefault();
      navigate(options.to || "/");
    },
  });
  return h("a", props, ...children);
};
