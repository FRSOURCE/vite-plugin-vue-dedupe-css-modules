import type { Plugin } from "vite";
import { createFilter } from "@rollup/pluginutils";

export default function dedupeCSSModulesPlugin(options = {}): Plugin {
  const defaultOptions = {
    include: ["**/*.vue"],
    exclude: "node_modules",
  };

  const opts = { ...defaultOptions, ...options };
  const filter = createFilter(opts.include, opts.exclude || /node_modules/);
  const cache: Record<string, string> = {};

  return {
    name: "vite:vue-dedupe-css-modules",
    transform(source, id) {
      if (!filter(id)) return null;
      const regexReplace =
        /(import .+? from "([^"]+?)\?vue&type=style&index=.+?&src=)(.+?)(&lang\.module\..+?")/g;

      return {
        code: source.replace(regexReplace, (_match, g1, g2, g3, g4) => {
          cache[g2] = cache[g2] || g3;
          return g1 + cache[g2] + g4;
        }),
      };
    },
  };
}
