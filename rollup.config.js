import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "es",
    // in umd there is no code splitting so not recommended
    name: "pack-to-ui",
    // same name as package.json
  },
  external: ["react", "react-dom"], //depend on which 
  plugins: [typescript({ tsconfig: "tsconfig.json" })],
});
