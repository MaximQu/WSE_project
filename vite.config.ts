import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "",
	build: {
		outDir: "./docs",
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@st/utils": path.resolve(__dirname, "./src/assets/styles/utils"),
		},
	},
});
