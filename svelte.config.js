import preprocess from 'svelte-preprocess';
import static_adapater from '@sveltejs/adapter-static';
import { uglify } from 'rollup-plugin-uglify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess([]),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: static_adapater(),
		vite: {
			build: {
				rollupOptions: {
					plugins: [uglify()]
				}
			}
		}
	}
};

export default config;
