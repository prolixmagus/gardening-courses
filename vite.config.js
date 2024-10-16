import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from '@rollup/plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		eslint({
			include: ['src/**/*.js', 'src/**/*.vue'], // Adjust this to include your desired file types
			exclude: ['node_modules/**'], // Exclude node_modules
			// Optional: You can add additional ESLint options here if needed
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
