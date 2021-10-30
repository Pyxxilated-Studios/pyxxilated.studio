const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
	plugins: [
		tailwindcss,
		autoprefixer,
		cssnano({
			autoprefixer: false,
			preset: ['default']
		}),
		purgecss({
			content: ['./**/*.html', './**/*.svelte'],
			defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
			safelist: {
				greedy: [/^svelte-announcer/]
			}
		})
	]
};
