import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			utils: "./src/utils",
			pages: "./src/pages",
			assets: "./src/assets",
			components: "./src/components",
			helpers: "./src/helpers",
			atoms: "./src/atoms",
		},
	},
});
