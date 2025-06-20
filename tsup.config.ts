import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	format: ["esm", "cjs"],
	dts: true,
	clean: true,
	sourcemap: true,
	minify: true,
	external: ["react", "react-dom"],
});
// This configuration file sets up the build process for a TypeScript project using tsup.
