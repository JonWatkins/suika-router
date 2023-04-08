import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

const formats = ["umd", "esm"];

const plugins = [
  typescript({
    tsconfig: "./tsconfig.json",
    declaration: true,
    declarationDir: "dist",
  }),
  terser(),
];

export default formats.map((format) => ({
  input: "./src/index.ts",
  output: {
    format: format,
    name: "suikaRouter",
    file: `dist/bundle.${format}.js`,
    globals: {
      suika: "suika",
    },
  },
  plugins,
  external: ["suika"],
}));
