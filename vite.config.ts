import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import terser from '@rollup/plugin-terser';

const config: UserConfig = {
	plugins: [sveltekit()],
	optimizeDeps: {
		esbuildOptions: {
			minify: true
		}
	},
	build: {
		reportCompressedSize: false,
		rollupOptions: {
			plugins: [terser()],
			output: {
				generatedCode: {
					objectShorthand: true
				}
			},
			treeshake: 'recommended'
		}
	}
};

export default config;
